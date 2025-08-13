import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, In } from 'typeorm';
import { Booking, BookingStatus, PaymentStatus, PaymentMethod } from '../../common/entities/booking.entity';
import { CharterDeal } from '../../common/entities/charter-deal.entity';
import { Passenger } from '../../common/entities/passenger.entity';
import { BookingTimeline, TimelineEventType } from '../../common/entities/booking-timeline.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingStatusResponseDto } from './dto/booking-status-response.dto';
import { v4 as uuidv4 } from 'uuid';
import { BookingPaymentService } from './services/booking-payment.service';
import { BookingTimelineService } from './services/booking-timeline.service';
import { BookingQueryService } from './services/booking-query.service';
import { PaymentProviderService } from '../payments/services/payment-provider.service';
import { PaymentProviderType } from '../payments/interfaces/payment-provider.interface';
import { User } from '../../common/entities/user.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(CharterDeal)
    private readonly charterDealRepository: Repository<CharterDeal>,
    @InjectRepository(Passenger)
    private readonly passengerRepository: Repository<Passenger>,
    @InjectRepository(BookingTimeline)
    private readonly timelineRepository: Repository<BookingTimeline>,
    private readonly dataSource: DataSource,
    public readonly bookingPaymentService: BookingPaymentService,
    private readonly bookingTimelineService: BookingTimelineService,
    private readonly bookingQueryService: BookingQueryService,
    public readonly paymentProviderService: PaymentProviderService,
  ) {}

  async create(createBookingDto: CreateBookingDto, userId: string): Promise<Booking> {
    // Generate unique booking ID only (no reference number yet)
    const bookingId = this.generateBookingId();

    // Fetch the charter deal to get company ID
    const deal = await this.charterDealRepository.findOne({
      where: { id: createBookingDto.dealId },
      select: ['id', 'companyId', 'availableSeats']
    });

    if (!deal) {
      throw new NotFoundException(`Charter deal with ID ${createBookingDto.dealId} not found`);
    }

    // Fetch user data to include as passenger if needed
    const user = await this.dataSource.getRepository(User).findOne({
      where: { id: userId },
      select: ['id', 'first_name', 'last_name', 'nationality', 'date_of_birth']
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Prepare passengers list - always include the user as the first passenger
    const passengersToCreate = [];
    
    // Check if user is already in the passengers list
    const userInPassengers = createBookingDto.passengers?.find(p => 
      p.firstName.toLowerCase() === user.first_name?.toLowerCase() && 
      p.lastName.toLowerCase() === user.last_name?.toLowerCase()
    );

    if (!userInPassengers) {
      // Add user as the first passenger
      passengersToCreate.push({
        firstName: user.first_name || 'Unknown',
        lastName: user.last_name || 'User',
        age: user.date_of_birth ? this.calculateAge(user.date_of_birth) : undefined,
        nationality: user.nationality,
        idPassportNumber: undefined, // User's passport not stored in user table
        isUser: true, // Flag to identify this is the booking user
      });
    }

    // Add other passengers from the DTO
    if (createBookingDto.passengers && createBookingDto.passengers.length > 0) {
      passengersToCreate.push(...createBookingDto.passengers.map(p => ({
        ...p,
        isUser: false, // Flag to identify these are additional passengers
      })));
    }

    // Check if deal has enough available seats
    if (deal.availableSeats < passengersToCreate.length) {
      throw new BadRequestException(`Insufficient seats available. Only ${deal.availableSeats} seats left, but ${passengersToCreate.length} passengers requested.`);
    }

    // Check for existing booking
    const hasExisting = await this.bookingQueryService.hasExistingBooking(userId, createBookingDto.dealId);
    if (hasExisting) {
      throw new ConflictException('A booking for this deal is already in progress or confirmed.');
    }

    // Start transaction immediately after connecting
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Generate reference number for booking creation
      const referenceNumber = this.generateBookingReference();
      
      // Create booking with reference number but no loyalty points (will be populated on payment)
      const booking = this.bookingRepository.create({
        id: bookingId,
        userId,
        dealId: createBookingDto.dealId,
        company_id: createBookingDto.companyId,
        totalPrice: createBookingDto.totalPrice,
        onboardDining: createBookingDto.onboardDining || false,
        groundTransportation: createBookingDto.groundTransportation || false,
        billingRegion: createBookingDto.billingRegion,
        paymentMethod: createBookingDto.paymentMethod,
        referenceNumber: referenceNumber,
        bookingStatus: BookingStatus.PENDING,
        paymentStatus: PaymentStatus.PENDING,
        specialRequirements: createBookingDto.specialRequirements,
      });

      const savedBooking = await queryRunner.manager.save(booking);

      // Create passengers
      const passengersToCreate = createBookingDto.passengers || [];
      for (const passengerData of passengersToCreate) {
        const passenger = this.passengerRepository.create({
          booking_id: bookingId,
          first_name: passengerData.firstName,
          last_name: passengerData.lastName,
          age: passengerData.age,
          nationality: passengerData.nationality,
          id_passport_number: passengerData.idPassportNumber,
          is_user: passengerData.isUser || false,
        });

        await queryRunner.manager.save(passenger);
      }

      // Update available seats in the deal
      const passengerCount = passengersToCreate.length;
      deal.availableSeats -= passengerCount;
      await queryRunner.manager.save(deal);

      await queryRunner.commitTransaction();

      // Create timeline event for booking creation
      await this.bookingTimelineService.createTimelineEvent(bookingId, TimelineEventType.BOOKING_CREATED, {
        title: 'Booking Created',
        description: `Booking ${referenceNumber} has been created successfully with ${passengerCount} passengers. Loyalty points will be earned upon payment.`,
        metadata: { 
          passengerCount, 
          companyId: deal.companyId,
          referenceNumber: referenceNumber,
          totalPrice: createBookingDto.totalPrice,
          userIncluded: !userInPassengers, // Track if user was automatically added
        }
      });

      // Return booking with passengers
      return this.bookingQueryService.findOne(bookingId);
    } catch (error) {
      if (queryRunner.isTransactionActive) {
        await queryRunner.rollbackTransaction();
      }
      throw new BadRequestException('Failed to create booking: ' + error.message);
    } finally {
      await queryRunner.release();
    }
  }

  /**
   * Create booking with payment intent for seamless Stripe integration
   */
  async createWithPaymentIntent(createBookingDto: CreateBookingDto, userId: string): Promise<any> {
    // Create the booking first
    const booking = await this.create(createBookingDto, userId);
    
    try {
      // Create payment intent with Stripe
      const paymentIntent = await this.paymentProviderService.createPaymentIntent({
        amount: booking.totalPrice,
        currency: 'USD',
        bookingId: booking.id,
        userId: booking.userId,
        description: `Payment for booking ${booking.referenceNumber}`,
        metadata: {
          bookingId: booking.id,
          referenceNumber: booking.referenceNumber,
          dealId: booking.dealId,
          company_id: booking.company_id,
        },
      }, PaymentProviderType.STRIPE);

      return {
        booking,
        paymentIntent: {
          id: paymentIntent.id,
          clientSecret: paymentIntent.clientSecret,
          status: paymentIntent.status,
          requiresAction: paymentIntent.requiresAction,
          nextAction: paymentIntent.nextAction,
        },
        paymentInstructions: {
          amount: booking.totalPrice,
          currency: 'USD',
          paymentMethods: ['card', 'apple_pay', 'google_pay', 'bank_transfer'],
          nextSteps: [
            'Complete payment using the client secret',
            'Confirm payment using /payments/confirm',
            'Process booking using /bookings/:id/process-payment'
          ],
          apiEndpoints: {
            confirmPayment: `/payments/confirm`,
            processBooking: `/bookings/${booking.id}/process-payment`,
            paymentStatus: `/payments/status/${paymentIntent.id}`
          }
        }
      };
    } catch (error) {
      // If payment intent creation fails, still return the booking
      // User can create payment intent later
      console.error('Failed to create payment intent:', error);
      return {
        booking,
        paymentIntent: null,
        paymentInstructions: {
          amount: booking.totalPrice,
          currency: 'USD',
          paymentMethods: ['card', 'apple_pay', 'google_pay', 'bank_transfer'],
          nextSteps: [
            'Create payment intent using /payments/create-intent',
            'Complete payment with Stripe',
            'Process booking using /bookings/:id/process-payment'
          ],
          apiEndpoints: {
            createIntent: `/payments/create-intent`,
            confirmPayment: `/payments/confirm`,
            processBooking: `/bookings/${booking.id}/process-payment`
          }
        }
      };
    }
  }

  async findAll(userId?: string): Promise<Booking[]> {
    return this.bookingQueryService.findAll(userId);
  }

  async findOne(id: string): Promise<Booking> {
    return this.bookingQueryService.findOne(id);
  }

  async findByReference(referenceNumber: string): Promise<Booking> {
    return this.bookingQueryService.findByReference(referenceNumber);
  }

  async findByUser(userId: string): Promise<Booking[]> {
    return this.bookingQueryService.findAll(userId);
  }

  async findByUserWithFilters(
    userId: string,
    filters: { upcoming?: boolean; status?: BookingStatus }
  ): Promise<Booking[]> {
    return this.bookingQueryService.findByUserWithFilters(userId, filters);
  }

  async updateStatus(id: string, bookingStatus: BookingStatus): Promise<Booking> {
    const booking = await this.bookingQueryService.findOne(id);
    const oldStatus = booking.bookingStatus;
    
    booking.bookingStatus = bookingStatus;
    await this.bookingRepository.save(booking);

    // Create timeline event
    await this.bookingTimelineService.createTimelineEvent(id, TimelineEventType.STATUS_CHANGED, {
      title: 'Booking Status Updated',
      description: `Booking status changed from ${oldStatus} to ${bookingStatus}`,
      oldValue: oldStatus,
      newValue: bookingStatus,
    });

    return this.bookingQueryService.findOne(id);
  }

  /**
   * Update loyalty points and wallet amount used for a booking
   */
  async updateLoyaltyAndWallet(
    bookingId: string,
    loyaltyPointsRedeemed: number = 0,
    walletAmountUsed: number = 0
  ): Promise<Booking> {
    const booking = await this.bookingQueryService.findOne(bookingId);
    
    booking.loyaltyPointsRedeemed = loyaltyPointsRedeemed;
    booking.walletAmountUsed = walletAmountUsed;
    
    await this.bookingRepository.save(booking);

    // Create timeline event
    await this.bookingTimelineService.createTimelineEvent(bookingId, TimelineEventType.LOYALTY_UPDATED, {
      title: 'Loyalty Points and Wallet Updated',
      description: `Loyalty points redeemed: ${loyaltyPointsRedeemed}, Wallet amount used: $${walletAmountUsed}`,
      metadata: { loyaltyPointsRedeemed, walletAmountUsed }
    });

    return this.bookingQueryService.findOne(bookingId);
  }

  /**
   * Get booking summary with loyalty and wallet information
   */
  async getBookingSummary(bookingId: string): Promise<any> {
    return this.bookingQueryService.getBookingSummary(bookingId);
  }

  async updatePaymentStatus(id: string, paymentStatus: PaymentStatus): Promise<Booking> {
    return this.bookingPaymentService.updatePaymentStatus(id, paymentStatus);
  }

  async cancel(id: string, userId: string): Promise<Booking> {
    const booking = await this.bookingQueryService.findOne(id);

    // Verify ownership
    if (booking.userId !== userId) {
      throw new BadRequestException('You can only cancel your own bookings');
    }

    // Check if booking can be cancelled
    if (!booking.canBeCancelled) {
      throw new BadRequestException('This booking cannot be cancelled');
    }

    const oldStatus = booking.bookingStatus;
    booking.bookingStatus = BookingStatus.CANCELLED;
    await this.bookingRepository.save(booking);

    // Create timeline event
    await this.bookingTimelineService.createTimelineEvent(id, TimelineEventType.BOOKING_CANCELLED, {
      title: 'Booking Cancelled',
      description: `Booking cancelled by user. Previous status: ${oldStatus}`,
      oldValue: oldStatus,
      newValue: BookingStatus.CANCELLED,
    });

    return this.bookingQueryService.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const booking = await this.bookingQueryService.findOne(id);
    await this.bookingRepository.remove(booking);
  }

  private bookingCounter = 0;

  private generateBookingId(): string {
    const now = new Date();
    // Day
    const day = String(now.getDate()).padStart(2, '0');
    // Month (short, uppercase)
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    // Year (last two digits)
    const year = String(now.getFullYear()).slice(-2);
    // Hour, minute, and seconds
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // Random 3-letter code
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    // Auto-incrementing 2-digit number
    this.bookingCounter = (this.bookingCounter + 1) % 100; // Reset to 0 after 99
    const counter = String(this.bookingCounter).padStart(2, '0');

    return `BK-${day}${month}${year}-${hour}${minute}${seconds}-${random}${counter}`;
  }

  private generateBookingReference(): string {
    const prefix = 'AC'; // Air Charters
    const timestamp = Date.now().toString().slice(-6); // Last 6 digits of timestamp
    const random = Math.random().toString(36).substring(2, 5).toUpperCase(); // 3 random chars
    return `${prefix}${timestamp}${random}`;
  }

  private calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  // Statistics methods
  async getBookingStats(userId?: string): Promise<{
    total: number;
    pending: number;
    confirmed: number;
    cancelled: number;
    completed: number;
  }> {
    return this.bookingQueryService.getBookingStats(userId);
  }

  async confirmBooking(
    id: string,
    userId: string,
    paymentTransactionId: string
  ): Promise<any> {
    const booking = await this.bookingQueryService.findOne(id);

    // Verify ownership
    if (booking.userId !== userId) {
      throw new BadRequestException('You can only confirm your own bookings');
    }

    // Check if booking can be confirmed
    if (booking.bookingStatus !== BookingStatus.PENDING) {
      throw new BadRequestException('Booking is not in pending status');
    }

    if (booking.paymentStatus !== PaymentStatus.PENDING) {
      throw new BadRequestException('Payment is not in pending status');
    }

    // Process payment and populate points/reference
    const updatedBooking = await this.bookingPaymentService.processPayment(
      id,
      paymentTransactionId,
      booking.paymentMethod || PaymentMethod.CARD,
      booking.totalPrice
    );

    // Generate confirmation email content
    const confirmationEmail = this.generateConfirmationEmail(updatedBooking);

    return {
      id: updatedBooking.id,
      referenceNumber: updatedBooking.referenceNumber,
      bookingStatus: updatedBooking.bookingStatus,
      paymentStatus: updatedBooking.paymentStatus,
      confirmationEmail,
    };
  }

  async findPendingPaymentBookings(userId: string): Promise<Booking[]> {
    return this.bookingQueryService.findPendingPaymentBookings(userId);
  }

  private generateConfirmationEmail(booking: Booking): string {
    return `
      Dear ${booking.user.first_name} ${booking.user.last_name},
      
      Your booking has been confirmed!
      
      Booking Reference: ${booking.referenceNumber}
      Flight: ${booking.deal.fixedRoute.origin} → ${booking.deal.fixedRoute.destination}
      Date: ${booking.deal.date}
      Time: ${booking.deal.time}
      Aircraft: ${booking.deal.aircraft.name}
      Company: ${booking.deal.company.companyName}
      
      Total Amount: $${booking.totalPrice}
      
      Please arrive 30 minutes before departure time.
      
      Thank you for choosing our service!
    `;
  }

  // Timeline Methods
  async getBookingTimeline(bookingId: string): Promise<BookingTimeline[]> {
    return this.bookingTimelineService.getBookingTimeline(bookingId);
  }

  async getBookingStatusByReference(referenceNumber: string): Promise<BookingStatusResponseDto> {
    return this.bookingQueryService.getBookingStatusByReference(referenceNumber);
  }
} 