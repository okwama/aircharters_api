import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { UserTrip, UserTripStatus } from '../../common/entities/user-trips.entity';
import { Booking } from '../../common/entities/booking.entity';
import { CharterDeal } from '../../common/entities/charter-deal.entity';
import { ChartersCompany } from '../../common/entities/charters-company.entity';
import { Aircraft } from '../../common/entities/aircraft.entity';
import { FixedRoute } from '../../common/entities/fixed-route.entity';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(UserTrip)
    private readonly userTripRepository: Repository<UserTrip>,
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(CharterDeal)
    private readonly charterDealRepository: Repository<CharterDeal>,
    @InjectRepository(ChartersCompany)
    private readonly companyRepository: Repository<ChartersCompany>,
    @InjectRepository(Aircraft)
    private readonly aircraftRepository: Repository<Aircraft>,
    @InjectRepository(FixedRoute)
    private readonly routeRepository: Repository<FixedRoute>,
    private readonly dataSource: DataSource,
  ) {}

  /**
   * Get user trip history with full booking and deal details
   */
  async getUserTripHistory(userId: string): Promise<any[]> {
    const userTrips = await this.userTripRepository
      .createQueryBuilder('userTrip')
      .leftJoinAndSelect('userTrip.booking', 'booking')
      .leftJoinAndSelect('booking.deal', 'deal')
      .leftJoinAndSelect('deal.company', 'company')
      .leftJoinAndSelect('deal.aircraft', 'aircraft')
      .leftJoinAndSelect('deal.fixedRoute', 'route')
      .where('userTrip.userId = :userId', { userId })
      .orderBy('userTrip.createdAt', 'DESC')
      .getMany();

    return userTrips.map(trip => this.formatTripResponse(trip));
  }

  /**
   * Get trips by status (upcoming, completed, cancelled)
   */
  async getTripsByStatus(userId: string, status: UserTripStatus): Promise<any[]> {
    const userTrips = await this.userTripRepository
      .createQueryBuilder('userTrip')
      .leftJoinAndSelect('userTrip.booking', 'booking')
      .leftJoinAndSelect('booking.deal', 'deal')
      .leftJoinAndSelect('deal.company', 'company')
      .leftJoinAndSelect('deal.aircraft', 'aircraft')
      .leftJoinAndSelect('deal.fixedRoute', 'route')
      .where('userTrip.userId = :userId', { userId })
      .andWhere('userTrip.status = :status', { status })
      .orderBy('userTrip.createdAt', 'DESC')
      .getMany();

    return userTrips.map(trip => this.formatTripResponse(trip));
  }

  /**
   * Get specific trip by ID
   */
  async getTripById(tripId: string, userId: string): Promise<any> {
    const userTrip = await this.userTripRepository
      .createQueryBuilder('userTrip')
      .leftJoinAndSelect('userTrip.booking', 'booking')
      .leftJoinAndSelect('booking.deal', 'deal')
      .leftJoinAndSelect('deal.company', 'company')
      .leftJoinAndSelect('deal.aircraft', 'aircraft')
      .leftJoinAndSelect('deal.fixedRoute', 'route')
      .where('userTrip.id = :tripId', { tripId })
      .andWhere('userTrip.userId = :userId', { userId })
      .getOne();

    if (!userTrip) {
      throw new NotFoundException('Trip not found');
    }

    return this.formatTripResponse(userTrip);
  }

  /**
   * Update trip status
   */
  async updateTripStatus(
    tripId: string,
    userId: string,
    status: UserTripStatus,
  ): Promise<any> {
    const userTrip = await this.userTripRepository.findOne({
      where: { id: tripId, userId },
    });

    if (!userTrip) {
      throw new NotFoundException('Trip not found');
    }

    // Update status and relevant timestamp
    userTrip.status = status;
    
    if (status === UserTripStatus.COMPLETED) {
      userTrip.completedAt = new Date();
    } else if (status === UserTripStatus.CANCELLED) {
      userTrip.cancelledAt = new Date();
    }

    const updatedTrip = await this.userTripRepository.save(userTrip);

    // Return full trip details
    return this.getTripById(tripId, userId);
  }

  /**
   * Add or update trip review and rating
   */
  async addTripReview(
    tripId: string,
    userId: string,
    reviewData: {
      rating: number;
      review: string;
      photos?: string;
      videos?: string;
    },
  ): Promise<any> {
    const userTrip = await this.userTripRepository.findOne({
      where: { id: tripId, userId },
    });

    if (!userTrip) {
      throw new NotFoundException('Trip not found');
    }

    // Validate rating
    if (reviewData.rating < 1 || reviewData.rating > 5) {
      throw new BadRequestException('Rating must be between 1 and 5');
    }

    // Update review data
    userTrip.rating = reviewData.rating;
    userTrip.review = reviewData.review;
    userTrip.reviewDate = new Date();
    userTrip.photos = reviewData.photos;
    userTrip.videos = reviewData.videos;

    await this.userTripRepository.save(userTrip);

    // Return full trip details
    return this.getTripById(tripId, userId);
  }

  /**
   * Get trip statistics for user
   */
  async getTripStats(userId: string): Promise<any> {
    const stats = await this.userTripRepository
      .createQueryBuilder('userTrip')
      .select('userTrip.status', 'status')
      .addSelect('COUNT(*)', 'count')
      .where('userTrip.userId = :userId', { userId })
      .groupBy('userTrip.status')
      .getRawMany();

    const totalTrips = await this.userTripRepository.count({
      where: { userId },
    });

    const averageRating = await this.userTripRepository
      .createQueryBuilder('userTrip')
      .select('AVG(userTrip.rating)', 'averageRating')
      .where('userTrip.userId = :userId', { userId })
      .andWhere('userTrip.rating IS NOT NULL')
      .getRawOne();

    return {
      total: totalTrips,
      upcoming: stats.find(s => s.status === UserTripStatus.UPCOMING)?.count || 0,
      completed: stats.find(s => s.status === UserTripStatus.COMPLETED)?.count || 0,
      cancelled: stats.find(s => s.status === UserTripStatus.CANCELLED)?.count || 0,
      averageRating: parseFloat(averageRating?.averageRating || '0'),
    };
  }

  /**
   * Create user trip record (called when booking payment is processed)
   */
  async createUserTrip(bookingId: string, userId: string): Promise<UserTrip> {
    const userTrip = this.userTripRepository.create({
      id: `trip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      bookingId,
      status: UserTripStatus.UPCOMING,
    });

    return await this.userTripRepository.save(userTrip);
  }

  /**
   * Format trip response with all related data
   */
  private formatTripResponse(userTrip: UserTrip): any {
    const booking = userTrip.booking as any;
    const deal = booking?.deal as any;
    const company = deal?.company as any;
    const aircraft = deal?.aircraft as any;
    const route = deal?.fixedRoute as any;

    return {
      id: userTrip.id,
      bookingId: userTrip.bookingId,
      status: userTrip.status,
      rating: userTrip.rating,
      review: userTrip.review,
      reviewDate: userTrip.reviewDate,
      photos: userTrip.photos,
      videos: userTrip.videos,
      createdAt: userTrip.createdAt,
      completedAt: userTrip.completedAt,
      cancelledAt: userTrip.cancelledAt,
      booking: booking ? {
        id: booking.id,
        referenceNumber: booking.referenceNumber,
        totalPrice: booking.totalPrice,
        bookingStatus: booking.bookingStatus,
        paymentStatus: booking.paymentStatus,
        createdAt: booking.createdAt,
        deal: deal ? {
          id: deal.id,
          date: deal.date,
          time: deal.time,
          pricePerSeat: deal.pricePerSeat,
          company: company ? {
            id: company.id,
            name: company.name,
            logo: company.logo,
          } : null,
          route: route ? {
            origin: route.origin,
            destination: route.destination,
            duration: route.duration,
          } : null,
          aircraft: aircraft ? {
            id: aircraft.id,
            name: aircraft.name,
            type: aircraft.type,
            capacity: aircraft.capacity,
          } : null,
        } : null,
      } : null,
    };
  }
} 