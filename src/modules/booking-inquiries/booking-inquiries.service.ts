import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { BookingInquiry, InquiryStatus, ProposedPriceType } from '../../common/entities/booking-inquiry.entity';
import { InquiryStop } from '../../common/entities/inquiry-stop.entity';
import { Aircraft } from '../../common/entities/aircraft.entity';
import { User } from '../../common/entities/user.entity';
import { Booking, BookingStatus, PaymentStatus, PaymentMethod } from '../../common/entities/booking.entity';
import { Payment } from '../../common/entities/payment.entity';
import { CreateBookingInquiryDto } from './dto/create-booking-inquiry.dto';
import { UpdateBookingInquiryDto } from './dto/update-booking-inquiry.dto';
import { PaymentProviderService } from '../payments/services/payment-provider.service';

@Injectable()
export class BookingInquiriesService {
  constructor(
    @InjectRepository(BookingInquiry)
    private bookingInquiryRepository: Repository<BookingInquiry>,
    @InjectRepository(InquiryStop)
    private inquiryStopRepository: Repository<InquiryStop>,
    @InjectRepository(Aircraft)
    private aircraftRepository: Repository<Aircraft>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
    private dataSource: DataSource,
    private paymentProviderService?: PaymentProviderService,
  ) {}

  async create(createBookingInquiryDto: CreateBookingInquiryDto, userId: string): Promise<BookingInquiry> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Generate reference number
      const referenceNumber = this.generateReferenceNumber();

      // Get aircraft and user details
      const aircraft = await this.aircraftRepository.findOne({
        where: { id: createBookingInquiryDto.aircraftId }
      });

      if (!aircraft) {
        throw new NotFoundException('Aircraft not found');
      }

      const user = await this.userRepository.findOne({
        where: { id: userId }
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      // Create the booking inquiry
      const bookingInquiry = this.bookingInquiryRepository.create({
        userId,
        aircraftId: createBookingInquiryDto.aircraftId,
        company_id: aircraft.companyId,
        requestedSeats: createBookingInquiryDto.requestedSeats,
        specialRequirements: createBookingInquiryDto.specialRequirements,
        onboardDining: createBookingInquiryDto.onboardDining || false,
        groundTransportation: createBookingInquiryDto.groundTransportation || false,
        billingRegion: createBookingInquiryDto.billingRegion,
        userNotes: createBookingInquiryDto.userNotes,
        referenceNumber,
      });

      const savedInquiry = await queryRunner.manager.save(bookingInquiry);

      // Create inquiry stops
      if (createBookingInquiryDto.stops && createBookingInquiryDto.stops.length > 0) {
        const stops = createBookingInquiryDto.stops.map(stopDto => 
          this.inquiryStopRepository.create({
            bookingInquiryId: savedInquiry.id,
            stopName: stopDto.stopName,
            longitude: stopDto.longitude,
            latitude: stopDto.latitude,
            price: stopDto.price,
            datetime: stopDto.datetime ? new Date(stopDto.datetime) : null,
            stopOrder: stopDto.stopOrder || 1,
            locationCode: stopDto.locationCode,
          })
        );

        await queryRunner.manager.save(stops);
      }

      await queryRunner.commitTransaction();

      // Return with relations
      return await this.findOne(savedInquiry.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(userId: string): Promise<BookingInquiry[]> {
    return await this.bookingInquiryRepository.find({
      where: { userId },
      relations: ['stops', 'aircraft', 'user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<BookingInquiry> {
    const inquiry = await this.bookingInquiryRepository.findOne({
      where: { id },
      relations: ['stops', 'aircraft', 'user'],
    });

    if (!inquiry) {
      throw new NotFoundException(`Booking inquiry with ID ${id} not found`);
    }

    return inquiry;
  }

  async findByReference(referenceNumber: string): Promise<BookingInquiry> {
    const inquiry = await this.bookingInquiryRepository.findOne({
      where: { referenceNumber },
      relations: ['stops', 'aircraft', 'user'],
    });

    if (!inquiry) {
      throw new NotFoundException(`Booking inquiry with reference ${referenceNumber} not found`);
    }

    return inquiry;
  }

  async update(id: number, updateBookingInquiryDto: UpdateBookingInquiryDto): Promise<BookingInquiry> {
    const inquiry = await this.findOne(id);

    // Update inquiry status and pricing
    if (updateBookingInquiryDto.inquiryStatus === InquiryStatus.PRICED) {
      inquiry.inquiryStatus = InquiryStatus.PRICED;
      inquiry.proposedPrice = updateBookingInquiryDto.proposedPrice;
      inquiry.proposedPriceType = updateBookingInquiryDto.proposedPriceType;
      inquiry.adminNotes = updateBookingInquiryDto.adminNotes;
      inquiry.pricedAt = new Date();
    }

    return await this.bookingInquiryRepository.save(inquiry);
  }

  async confirmInquiry(id: number, userId: string): Promise<{ inquiry: BookingInquiry; paymentIntent?: any }> {
    const inquiry = await this.findOne(id);

    if (inquiry.userId !== userId) {
      throw new BadRequestException('You can only confirm your own inquiries');
    }

    if (inquiry.inquiryStatus !== InquiryStatus.PRICED) {
      throw new BadRequestException('Inquiry must be priced before confirmation');
    }

    if (!inquiry.proposedPrice) {
      throw new BadRequestException('Inquiry must have a proposed price');
    }

    // Update inquiry status
    inquiry.inquiryStatus = InquiryStatus.CONFIRMED;
    inquiry.confirmedAt = new Date();
    await this.bookingInquiryRepository.save(inquiry);

    // Create booking from inquiry
    const booking = await this.createBookingFromInquiry(inquiry);

    // Create payment intent only if payment provider is available
    let paymentIntent = null;
    if (this.paymentProviderService) {
      try {
        paymentIntent = await this.paymentProviderService.createPaymentIntent({
          amount: inquiry.proposedPrice * 100, // Convert to cents
          currency: 'USD',
          bookingId: booking.id,
          userId: inquiry.userId,
          description: `Payment for inquiry ${inquiry.referenceNumber}`,
          metadata: {
            inquiryId: inquiry.id,
            inquiryReference: inquiry.referenceNumber,
            aircraftId: inquiry.aircraftId,
            requestedSeats: inquiry.requestedSeats,
          },
        });
      } catch (error) {
        console.error('Failed to create payment intent:', error);
      }
    }

    return {
      inquiry,
      paymentIntent: paymentIntent ? {
        paymentIntentId: paymentIntent.id,
        clientSecret: paymentIntent.clientSecret,
        status: paymentIntent.status,
      } : null,
    };
  }

  async cancelInquiry(id: number, userId: string): Promise<BookingInquiry> {
    const inquiry = await this.findOne(id);

    if (inquiry.userId !== userId) {
      throw new BadRequestException('You can only cancel your own inquiries');
    }

    if (inquiry.inquiryStatus === InquiryStatus.CONFIRMED) {
      throw new BadRequestException('Cannot cancel confirmed inquiries');
    }

    inquiry.inquiryStatus = InquiryStatus.CANCELLED;
    inquiry.cancelledAt = new Date();

    return await this.bookingInquiryRepository.save(inquiry);
  }

  private async createBookingFromInquiry(inquiry: BookingInquiry): Promise<Booking> {
    const bookingId = `BK-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
    
    const booking = this.bookingRepository.create({
      id: bookingId,
      userId: inquiry.userId,
      dealId: 0, // No deal for inquiry-based bookings
      company_id: inquiry.company_id,
      totalPrice: inquiry.proposedPrice || 0,
      onboardDining: inquiry.onboardDining,
      groundTransportation: inquiry.groundTransportation,
      billingRegion: inquiry.billingRegion,
      paymentMethod: PaymentMethod.CARD,
      bookingStatus: BookingStatus.CONFIRMED,
      paymentStatus: PaymentStatus.PENDING,
      referenceNumber: inquiry.referenceNumber,
      specialRequirements: inquiry.specialRequirements,
    });

    return await this.bookingRepository.save(booking);
  }

  private generateReferenceNumber(): string {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `AC${timestamp}${random}`;
  }
} 