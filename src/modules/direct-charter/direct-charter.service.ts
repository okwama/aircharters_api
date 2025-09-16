import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, DataSource, DeepPartial } from 'typeorm';
import { Aircraft } from '../../common/entities/aircraft.entity';
import { AircraftCalendar, CalendarEventType } from '../../common/entities/aircraft-calendar.entity';
import { Booking, BookingType, BookingStatus, PaymentStatus } from '../../common/entities/booking.entity';
import { ChartersCompany } from '../../common/entities/charters-company.entity';
import { Passenger } from '../../common/entities/passenger.entity';
import { User } from '../../common/entities/user.entity';
import { Payment } from '../../common/entities/payment.entity';
import { AircraftTypeImagePlaceholder } from '../../common/entities/aircraft-type-image-placeholder.entity';
import { SearchDirectCharterDto } from './dto/search-direct-charter.dto';
import { BookDirectCharterDto } from './dto/book-direct-charter.dto';
import { PaymentProviderService } from '../payments/services/payment-provider.service';
import { PaymentProviderType } from '../payments/interfaces/payment-provider.interface';
import { GoogleEarthEngineService } from '../google-earth-engine/google-earth-engine.service';

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
    @InjectRepository(AircraftTypeImagePlaceholder)
    private aircraftTypeImagePlaceholderRepository: Repository<AircraftTypeImagePlaceholder>,
    private readonly dataSource: DataSource,
    private readonly paymentProviderService: PaymentProviderService,
    private readonly googleEarthEngineService: GoogleEarthEngineService,
  ) {}

  async searchAvailableAircraft(searchDto: SearchDirectCharterDto) {
    const { origin, destination, departureDateTime, returnDateTime, passengerCount, tripType, aircraftTypeImagePlaceholderId } = searchDto;
    
    const departureDate = new Date(departureDateTime);
    const returnDate = returnDateTime ? new Date(returnDateTime) : null;

    // Get all available aircraft that meet capacity requirements
    let query = this.aircraftRepository
      .createQueryBuilder('aircraft')
      .leftJoinAndSelect('aircraft.company', 'company')
      .leftJoinAndSelect('aircraft.images', 'images')
      .leftJoinAndSelect('aircraft.aircraftTypeImagePlaceholder', 'aircraftType')
      .where('aircraft.isAvailable = :isAvailable', { isAvailable: true })
      .andWhere('aircraft.maintenanceStatus = :maintenanceStatus', { maintenanceStatus: 'operational' })
      .andWhere('aircraft.capacity >= :passengerCount', { passengerCount });

    // Add aircraft type filter if provided
    if (aircraftTypeImagePlaceholderId) {
      query = query.andWhere('aircraft.aircraftTypeImagePlaceholderId = :aircraftTypeId', { 
        aircraftTypeId: aircraftTypeImagePlaceholderId 
      });
    }

    const availableAircraft = await query.getMany();

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

    // For direct charters, check if aircraft slot is already booked (exclusive booking)
    const existingBooking = await this.bookingRepository.findOne({
      where: {
        aircraftId: aircraftId,
        bookingStatus: In([BookingStatus.PENDING, BookingStatus.CONFIRMED]),
        departureDateTime: Between(
          new Date(departureDateTime),
          returnDateTime ? new Date(returnDateTime) : new Date(departureDateTime)
        ),
      },
    });

    if (existingBooking) {
      throw new BadRequestException('Aircraft slot is already booked for the selected time period');
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

      // Get coordinates for origin and destination
      const [originCoords, destinationCoords] = await Promise.all([
        this.getLocationCoordinates(bookDto.origin),
        this.getLocationCoordinates(bookDto.destination)
      ]);

      // Create booking - align with database schema
      const now = new Date();
      const booking = this.bookingRepository.create({
        userId: userId,
        dealId: null, // Direct charter doesn't use deals
        companyId: aircraft.company?.id || 1,
        aircraftId: bookDto.aircraftId, // Add aircraft ID for direct bookings
        bookingType: BookingType.DIRECT,
        totalPrice: bookDto.totalPrice,
        bookingStatus: BookingStatus.PENDING, // Start as pending, will be confirmed after payment
        paymentStatus: PaymentStatus.PENDING,
        referenceNumber: referenceNumber,
        specialRequirements: bookDto.specialRequests,
        // Flight details - populate from DTO
        originName: bookDto.origin,
        destinationName: bookDto.destination,
        departureDateTime: new Date(bookDto.departureDateTime),
        // Coordinates from Google service
        originLatitude: originCoords?.lat || null,
        originLongitude: originCoords?.lng || null,
        destinationLatitude: destinationCoords?.lat || null,
        destinationLongitude: destinationCoords?.lng || null,
        // Passenger counts
        totalAdults: bookDto.passengerCount, // Use actual passenger count
        totalChildren: 0, // Could be calculated from passenger ages if provided
        onboardDining: false, // Default to false, could be added to DTO if needed
        createdAt: now, // Manually set timestamp
        updatedAt: now, // Manually set timestamp
      });

      const savedBookingArr = await queryRunner.manager.save(booking);
      const savedBooking = Array.isArray(savedBookingArr) ? savedBookingArr[0] : savedBookingArr;

      // Create passenger record for the user - align with database schema
      const passenger = this.passengerRepository.create({
        booking_id: savedBooking.id, // Use number instead of string
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
        bookingId: savedBooking.id.toString(),
        originAirport: bookDto.origin,
        destinationAirport: bookDto.destination,
        passengerCount: bookDto.passengerCount,
        totalPrice: bookDto.totalPrice,
        pricePerHour: bookDto.pricePerHour,
        repositioningCost: bookDto.repositioningCost,
      });

      await queryRunner.manager.save(calendarEntry);

      // Create payment intent INSIDE transaction if totalPrice > 0 (not an inquiry)
      let paymentIntent = null;
      if (bookDto.totalPrice > 0) {
        try {
          paymentIntent = await this.paymentProviderService.createPaymentIntent({
            amount: bookDto.totalPrice,
            currency: 'USD',
            bookingId: savedBooking.id.toString(),
            userId: userId,
            description: `Payment for direct charter booking ${referenceNumber}`,
            metadata: {
              bookingId: savedBooking.id.toString(),
              referenceNumber: referenceNumber,
              dealId: 0, // Direct charter doesn't use deals
              company_id: aircraft.company?.id || 1,
              bookingType: 'direct_charter',
              aircraftId: bookDto.aircraftId,
            },
          }, PaymentProviderType.PAYSTACK);
        } catch (error) {
          console.error('Failed to create payment intent for direct charter:', error);
          // If payment intent creation fails, rollback the entire transaction
          throw new BadRequestException(`Payment setup failed: ${error.message}`);
        }
      } else {
        console.log(`Skipping payment intent creation for inquiry (totalPrice: ${bookDto.totalPrice})`);
      }

      // Commit transaction only after all operations succeed
      await queryRunner.commitTransaction();

      return {
        booking: {
          id: savedBooking.id,
          referenceNumber: referenceNumber,
          totalPrice: bookDto.totalPrice,
          bookingStatus: 'pending',
          paymentStatus: 'pending',
          companyId: aircraft.company?.id || 1,
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

  async getAircraftTypes() {
    return await this.aircraftTypeImagePlaceholderRepository.find({
      order: { type: 'ASC' }
    });
  }

  async getAircraftByType(typeId?: number, userLocation?: string) {
    let query = this.aircraftRepository
      .createQueryBuilder('aircraft')
      .leftJoinAndSelect('aircraft.company', 'company')
      .leftJoinAndSelect('aircraft.images', 'images')
      .leftJoinAndSelect('aircraft.aircraftTypeImagePlaceholder', 'aircraftType')
      .where('aircraft.isAvailable = :isAvailable', { isAvailable: true })
      .andWhere('aircraft.maintenanceStatus = :maintenanceStatus', { maintenanceStatus: 'operational' });

    if (typeId) {
      query = query.andWhere('aircraft.aircraftTypeImagePlaceholderId = :typeId', { typeId });
    }

    const aircraft = await query.getMany();

    return aircraft.map(aircraft => ({
      id: aircraft.id,
      name: aircraft.name,
      model: aircraft.model,
      capacity: aircraft.capacity,
      pricePerHour: aircraft.pricePerHour,
      baseAirport: aircraft.baseAirport,
      baseCity: aircraft.baseCity,
      companyId: aircraft.company?.id || null,
      companyName: aircraft.company?.companyName || 'Unknown',
      imageUrl: aircraft.images?.[0]?.url || aircraft.aircraftTypeImagePlaceholder?.placeholderImageUrl || null,
      aircraftType: aircraft.aircraftTypeImagePlaceholder?.type || 'unknown',
      flightDurationHours: this.estimateFlightDuration(aircraft.baseCity || 'Nairobi', userLocation || 'Nairobi'), // Calculate from user location
    }));
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

  // Helper method to get coordinates for a location using Google service
  private async getLocationCoordinates(locationName: string): Promise<{ lat: number; lng: number } | null> {
    try {
      // Search for the location using Google Places API
      const searchResults = await this.googleEarthEngineService.searchLocations({
        query: locationName,
        type: 'airport', // Prioritize airports for flight routes
      });
      
      if (searchResults.length > 0) {
        return searchResults[0].location;
      }
      
      // If no airport found, try a broader search
      const broaderResults = await this.googleEarthEngineService.searchLocations({
        query: locationName,
      });
      
      if (broaderResults.length > 0) {
        return broaderResults[0].location;
      }
      
      return null;
    } catch (error) {
      // Log the error but don't let it break the entire request
      console.error(`Error getting coordinates for ${locationName}:`, error);
      // Return null to indicate coordinates couldn't be found, but don't throw
      return null;
    }
  }
} 

function In(arg0: BookingStatus[]): BookingStatus | import("typeorm").FindOperator<BookingStatus> {
  throw new Error('Function not implemented.');
}
