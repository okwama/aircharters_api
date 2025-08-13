import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, DataSource, DeepPartial } from 'typeorm';
import { Aircraft } from '../../common/entities/aircraft.entity';
import { AircraftCalendar, CalendarEventType } from '../../common/entities/aircraft-calendar.entity';
import { Booking } from '../../common/entities/booking.entity';
import { ChartersCompany } from '../../common/entities/charters-company.entity';
import { Passenger } from '../../common/entities/passenger.entity';
import { User } from '../../common/entities/user.entity';
import { Payment } from '../../common/entities/payment.entity';
import { SearchDirectCharterDto } from './dto/search-direct-charter.dto';
import { BookDirectCharterDto } from './dto/book-direct-charter.dto';
import { PaymentProviderService } from '../payments/services/payment-provider.service';
import { PaymentProviderType } from '../payments/interfaces/payment-provider.interface';

@Injectable()
export class DirectCharterService {
  constructor(
    @InjectRepository(Aircraft)
    private aircraftRepository: Repository<Aircraft>,
    @InjectRepository(AircraftCalendar)
    private aircraftCalendarRepository: Repository<AircraftCalendar>,
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(ChartersCompany)
    private companyRepository: Repository<ChartersCompany>,
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>,
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
    private readonly dataSource: DataSource,
    private readonly paymentProviderService: PaymentProviderService,
  ) {}

  async searchAvailableAircraft(searchDto: SearchDirectCharterDto) {
    const { origin, destination, departureDateTime, returnDateTime, passengerCount, tripType } = searchDto;
    
    const departureDate = new Date(departureDateTime);
    const returnDate = returnDateTime ? new Date(returnDateTime) : null;

    // Get all available aircraft that meet capacity requirements
    const availableAircraft = await this.aircraftRepository
      .createQueryBuilder('aircraft')
      .leftJoinAndSelect('aircraft.company', 'company')
      .leftJoinAndSelect('aircraft.images', 'images')
      .where('aircraft.isAvailable = :isAvailable', { isAvailable: true })
      .andWhere('aircraft.maintenanceStatus = :maintenanceStatus', { maintenanceStatus: 'operational' })
      .andWhere('aircraft.capacity >= :passengerCount', { passengerCount })
      .getMany();

    const results = [];

    for (const aircraft of availableAircraft) {
      // Check if aircraft is available for the requested time period
      const isAvailable = await this.checkAircraftAvailability(
        aircraft.id,
        departureDate,
        returnDate,
        tripType
      );

      if (isAvailable) {
        // Calculate pricing
        const pricing = await this.calculatePricing(
          aircraft,
          origin,
          destination,
          departureDate,
          returnDate,
          tripType
        );

        // Calculate distance priority
        const priority = this.calculateLocationPriority(aircraft, origin);

        results.push({
          id: aircraft.id,
          name: aircraft.name,
          model: aircraft.model,
          capacity: aircraft.capacity,
          pricePerHour: aircraft.pricePerHour,
          baseAirport: aircraft.baseAirport,
          baseCity: aircraft.baseCity,
          companyName: aircraft.company?.companyName || 'Unknown',
          imageUrl: aircraft.images?.[0]?.url || null,
          ...pricing,
          priority,
        });
      }
    }

    // Sort by priority (same city first, then by distance, then by price)
    return results.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return a.totalPrice - b.totalPrice;
    });
  }

  private async checkAircraftAvailability(
    aircraftId: number,
    departureDate: Date,
    returnDate: Date | null,
    tripType: string
  ): Promise<boolean> {
    const startDate = departureDate;
    const endDate = returnDate || departureDate;

    // Check for conflicting calendar entries
    const conflicts = await this.aircraftCalendarRepository
      .createQueryBuilder('calendar')
      .where('calendar.aircraftId = :aircraftId', { aircraftId })
      .andWhere('calendar.eventType IN (:...blockingEvents)', {
        blockingEvents: [CalendarEventType.BOOKED, CalendarEventType.MAINTENANCE, CalendarEventType.BLOCKED]
      })
      .andWhere(
        '(calendar.startDateTime <= :endDate AND calendar.endDateTime >= :startDate)',
        { startDate, endDate }
      )
      .getCount();

    return conflicts === 0;
  }

  private async calculatePricing(
    aircraft: Aircraft,
    origin: string,
    destination: string,
    departureDate: Date,
    returnDate: Date | null,
    tripType: string
  ) {
    const basePricePerHour = parseFloat(aircraft.pricePerHour.toString());
    
    // Calculate flight duration (simplified - you might want to use actual flight time APIs)
    const flightDurationHours = this.estimateFlightDuration(origin, destination);
    
    // Calculate repositioning cost if aircraft needs to move
    const repositioningCost = this.calculateRepositioningCost(aircraft, origin);
    
    let totalHours = flightDurationHours;
    let totalPrice = basePricePerHour * flightDurationHours;

    if (tripType === 'roundtrip' && returnDate) {
      const returnDurationHours = this.estimateFlightDuration(destination, origin);
      totalHours += returnDurationHours;
      totalPrice += basePricePerHour * returnDurationHours;
    }

    totalPrice += repositioningCost;

    return {
      totalPrice: Math.round(totalPrice * 100) / 100,
      pricePerHour: basePricePerHour,
      repositioningCost: Math.round(repositioningCost * 100) / 100,
      flightDurationHours: Math.round(flightDurationHours * 10) / 10,
      totalHours: Math.round(totalHours * 10) / 10,
    };
  }

  private estimateFlightDuration(origin: string, destination: string): number {
    // Simplified flight duration estimation
    // In a real implementation, you'd use flight time APIs or distance calculations
    return 2.5; // Default 2.5 hours
  }

  private calculateRepositioningCost(aircraft: Aircraft, origin: string): number {
    // If aircraft is already at origin, no repositioning cost
    if (aircraft.baseCity?.toLowerCase() === origin.toLowerCase()) {
      return 0;
    }

    // Simplified repositioning cost calculation
    // In a real implementation, you'd calculate actual distance and costs
    const basePricePerHour = parseFloat(aircraft.pricePerHour.toString());
    return basePricePerHour * 0.5; // 50% of hourly rate for repositioning
  }

  private calculateLocationPriority(aircraft: Aircraft, origin: string): number {
    const aircraftCity = aircraft.baseCity?.toLowerCase();
    const originCity = origin.toLowerCase();

    if (aircraftCity === originCity) {
      return 1; // Same city - highest priority
    }

    // You could add more sophisticated distance calculations here
    // For now, we'll use a simple approach
    return 2; // Different city - lower priority
  }

  async bookDirectCharter(bookDto: BookDirectCharterDto, userId: string) {
    const { aircraftId, departureDateTime, returnDateTime, tripType } = bookDto;

    // Verify aircraft is still available
    const isAvailable = await this.checkAircraftAvailability(
      aircraftId,
      new Date(departureDateTime),
      returnDateTime ? new Date(returnDateTime) : null,
      tripType
    );

    if (!isAvailable) {
      throw new BadRequestException('Aircraft is no longer available for the selected time period');
    }

    // Get aircraft details to get company ID
    const aircraft = await this.aircraftRepository.findOne({
      where: { id: aircraftId },
      relations: ['company'],
    });

    if (!aircraft) {
      throw new NotFoundException(`Aircraft with ID ${aircraftId} not found`);
    }

    // Get user data for passenger creation
    const user = await this.dataSource.getRepository(User).findOne({
      where: { id: userId },
      select: ['id', 'first_name', 'last_name', 'nationality', 'date_of_birth']
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Use query runner for transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Generate unique booking ID
      const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const time = new Date().toTimeString().slice(0, 8).replace(/:/g, '');
      const random = Math.random().toString(36).substr(2, 3).toUpperCase();
      const bookingId = `BK-${timestamp}-${time}-${random}`;
      const referenceNumber = `AC${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

      // Create booking - align with database schema
      const booking = this.bookingRepository.create({
        id: bookingId,
        userId: userId, // Already string type
        dealId: 0, // Direct charter doesn't use deals, but field is required
        company_id: aircraft.company?.id || 1, // Use correct field name with underscore
        totalPrice: bookDto.totalPrice,
        bookingStatus: 'pending', // Start as pending, will be confirmed after payment
        paymentStatus: 'pending',
        referenceNumber: referenceNumber,
        specialRequirements: bookDto.specialRequests,
      } as DeepPartial<Booking>); // <-- concise fix

      const savedBookingArr = await queryRunner.manager.save(booking);
      const savedBooking = Array.isArray(savedBookingArr) ? savedBookingArr[0] : savedBookingArr;

      // Create passenger record for the user - align with database schema
      const passenger = this.passengerRepository.create({
        booking_id: bookingId, // Use correct field name with underscore
        first_name: user.first_name || 'Direct Charter', // Use correct field name
        last_name: user.last_name || 'Passenger', // Use correct field name
        age: user.date_of_birth ? this.calculateAge(user.date_of_birth) : 25,
        nationality: user.nationality || 'Kenyan',
        id_passport_number: 'N/A', // Use correct field name with underscore
        is_user: true, // Use correct field name with underscore
      });

      await queryRunner.manager.save(passenger);

      // Create calendar entry for the booking
      const calendarEntry = this.aircraftCalendarRepository.create({
        aircraftId: bookDto.aircraftId,
        companyId: aircraft.company?.id || 1,
        startDateTime: new Date(departureDateTime),
        endDateTime: returnDateTime ? new Date(returnDateTime) : new Date(departureDateTime),
        eventType: CalendarEventType.BOOKED,
        bookingId: savedBooking.id,
        originAirport: bookDto.origin,
        destinationAirport: bookDto.destination,
        passengerCount: bookDto.passengerCount,
        totalPrice: bookDto.totalPrice,
        pricePerHour: bookDto.pricePerHour,
        repositioningCost: bookDto.repositioningCost,
      });

      await queryRunner.manager.save(calendarEntry);

      await queryRunner.commitTransaction();

      // Create payment intent with Stripe (outside transaction)
      let paymentIntent = null;
      try {
        paymentIntent = await this.paymentProviderService.createPaymentIntent({
          amount: bookDto.totalPrice,
          currency: 'USD',
          bookingId: savedBooking.id,
          userId: userId,
          description: `Payment for direct charter booking ${referenceNumber}`,
          metadata: {
            bookingId: savedBooking.id,
            referenceNumber: referenceNumber,
            dealId: 0, // Direct charter doesn't use deals
            company_id: aircraft.company?.id || 1,
            bookingType: 'direct_charter',
            aircraftId: bookDto.aircraftId,
          },
        }, PaymentProviderType.STRIPE);
      } catch (error) {
        console.error('Failed to create payment intent for direct charter:', error);
        // Continue without payment intent - user can create it later
      }

      return {
        booking: {
          id: savedBooking.id,
          referenceNumber: referenceNumber,
          totalPrice: bookDto.totalPrice,
          bookingStatus: 'pending',
          paymentStatus: 'pending',
        },
        paymentIntent: paymentIntent ? {
          id: paymentIntent.id,
          clientSecret: paymentIntent.clientSecret,
          status: paymentIntent.status,
          requiresAction: paymentIntent.requiresAction,
          nextAction: paymentIntent.nextAction,
        } : null,
        paymentInstructions: {
          amount: bookDto.totalPrice,
          currency: 'USD',
          paymentMethods: ['card', 'apple_pay', 'google_pay'],
          nextSteps: paymentIntent ? [
            'Complete payment using the client secret',
            'Confirm payment using /bookings/:id/pay',
          ] : [
            'Create payment intent using /payments/create-intent',
            'Complete payment with Stripe',
            'Process booking using /bookings/:id/pay',
          ],
          apiEndpoints: {
            createIntent: `/payments/create-intent`,
            confirmPayment: `/bookings/${savedBooking.id}/pay`,
            paymentStatus: paymentIntent ? `/payments/status/${paymentIntent.id}` : null,
          },
        },
        message: 'Direct charter booking created successfully. Please complete payment to confirm.',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  private calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }
} 