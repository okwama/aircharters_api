import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharterDeal } from '../../common/entities/charter-deal.entity';
import { ChartersCompany } from '../../common/entities/charters-company.entity';
import { FixedRoute } from '../../common/entities/fixed-route.entity';
import { Aircraft } from '../../common/entities/aircraft.entity';

export interface CharterDealWithRelations {
  id: number;
  companyId: number;
  fixedRouteId: number;
  aircraftId: number;
  date: Date;
  time: string;
  pricePerSeat: number | null;
  discountPerSeat: number;
  pricePerHour: number | null;
  discountPerHour: number;
  availableSeats: number;
  dealType: string;
  createdAt: Date;
  updatedAt: Date;
  companyName: string;
  companyLogo: string | null;
  origin: string;
  destination: string;
  routeImageUrl: string;
  aircraftName: string;
  aircraftType: string;
  aircraftCapacity: number;
  // New fields from existing database
  aircraftImages: string[];
  routeImages: string[];
  // Placeholder fields
  duration: string;
  amenities: Array<{icon: string, name: string}>;
}

@Injectable()
export class CharterDealsService {
  constructor(
    @InjectRepository(CharterDeal)
    private charterDealRepository: Repository<CharterDeal>,
    @InjectRepository(ChartersCompany)
    private companyRepository: Repository<ChartersCompany>,
    @InjectRepository(FixedRoute)
    private routeRepository: Repository<FixedRoute>,
    @InjectRepository(Aircraft)
    private aircraftRepository: Repository<Aircraft>,
  ) {}

  async findAllWithRelations(
    page: number = 1,
    limit: number = 10,
    searchQuery?: string,
    dealType?: string,
    fromDate?: Date,
    toDate?: Date,
  ): Promise<{ deals: CharterDealWithRelations[]; total: number }> {
    const offset = (page - 1) * limit;

    let query = this.charterDealRepository
      .createQueryBuilder('deal')
      .leftJoinAndSelect('deal.company', 'company')
      .leftJoinAndSelect('deal.fixedRoute', 'route')
      .leftJoinAndSelect('deal.aircraft', 'aircraft')
      .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
      .where('company.status = :status', { status: 'active' })
      .andWhere('aircraft.isAvailable = :isAvailable', { isAvailable: true })
      .andWhere('aircraft.maintenanceStatus = :maintenanceStatus', { maintenanceStatus: 'operational' });

    // Add search filters
    if (searchQuery) {
      query = query.andWhere(
        '(company.companyName LIKE :search OR route.origin LIKE :search OR route.destination LIKE :search OR aircraft.name LIKE :search)',
        { search: `%${searchQuery}%` }
      );
    }

    // Add deal type filter
    if (dealType) {
      query = query.andWhere('deal.dealType = :dealType', { dealType });
    }

    // Add date filters
    if (fromDate) {
      query = query.andWhere('deal.date >= :fromDate', { fromDate });
    }

    if (toDate) {
      query = query.andWhere('deal.date <= :toDate', { toDate });
    }

    // Get total count
    const total = await query.getCount();

    // Get paginated results
    const deals = await query
      .select([
        'deal.id',
        'deal.companyId',
        'deal.fixedRouteId',
        'deal.aircraftId',
        'deal.date',
        'deal.time',
        'deal.pricePerSeat',
        'deal.discountPerSeat',
        'deal.pricePerHour',
        'deal.discountPerHour',
        'deal.availableSeats',
        'deal.dealType',
        'deal.createdAt',
        'deal.updatedAt',
        'company.companyName',
        'company.logo',
        'route.origin',
        'route.destination',
        'route.imageUrl',
        'aircraft.name',
        'aircraft.type',
        'aircraft.capacity',
        'GROUP_CONCAT(images.url) as aircraftImages',
      ])
      .groupBy('deal.id')
      .orderBy('deal.date', 'ASC')
      .addOrderBy('deal.time', 'ASC')
      .offset(offset)
      .limit(limit)
      .getRawMany();

    // Transform the raw results to match the interface
    const transformedDeals: CharterDealWithRelations[] = deals.map(deal => ({
      id: deal.deal_id,
      companyId: deal.deal_companyId,
      fixedRouteId: deal.deal_fixedRouteId,
      aircraftId: deal.deal_aircraftId,
      date: deal.deal_date,
      time: deal.deal_time,
      pricePerSeat: deal.deal_pricePerSeat,
      discountPerSeat: deal.deal_discountPerSeat,
      pricePerHour: deal.deal_pricePerHour,
      availableSeats: deal.deal_availableSeats,
      dealType: deal.deal_dealType,
      createdAt: deal.deal_createdAt,
      updatedAt: deal.deal_updatedAt,
      companyName: deal.company_companyName,
      companyLogo: deal.company_logo,
      origin: deal.route_origin,
      destination: deal.route_destination,
      routeImageUrl: deal.route_imageUrl,
      aircraftName: deal.aircraft_name,
      aircraftType: deal.aircraft_type,
      aircraftCapacity: deal.aircraft_capacity,
      discountPerHour: deal.deal_discountPerHour || 0,
      // New fields from existing database
      aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
      routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
      // Placeholder fields
      duration: this.calculateDuration(deal.route_origin, deal.route_destination),
      amenities: this.getAircraftAmenities(deal.aircraft_type),
    }));

    return { deals: transformedDeals, total };
  }

  async findById(id: number): Promise<CharterDealWithRelations | null> {
    const deal = await this.charterDealRepository
      .createQueryBuilder('deal')
      .leftJoinAndSelect('deal.company', 'company')
      .leftJoinAndSelect('deal.fixedRoute', 'route')
      .leftJoinAndSelect('deal.aircraft', 'aircraft')
      .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
      .where('deal.id = :id', { id })
      .select([
        'deal.id',
        'deal.companyId',
        'deal.fixedRouteId',
        'deal.aircraftId',
        'deal.date',
        'deal.time',
        'deal.pricePerSeat',
        'deal.discountPerSeat',
        'deal.pricePerHour',
        'deal.discountPerHour',
        'deal.availableSeats',
        'deal.dealType',
        'deal.createdAt',
        'deal.updatedAt',
        'company.companyName',
        'company.logo',
        'route.origin',
        'route.destination',
        'route.imageUrl',
        'aircraft.name',
        'aircraft.type',
        'aircraft.capacity',
        'GROUP_CONCAT(images.url) as aircraftImages',
      ])
      .groupBy('deal.id')
      .getRawOne();

    if (!deal) return null;

    return {
      id: deal.deal_id,
      companyId: deal.deal_companyId,
      fixedRouteId: deal.deal_fixedRouteId,
      aircraftId: deal.deal_aircraftId,
      date: deal.deal_date,
      time: deal.deal_time,
      pricePerSeat: deal.deal_pricePerSeat,
      discountPerSeat: deal.deal_discountPerSeat,
      pricePerHour: deal.deal_pricePerHour,
      discountPerHour: deal.deal_discountPerHour || 0,
      availableSeats: deal.deal_availableSeats,
      dealType: deal.deal_dealType,
      createdAt: deal.deal_createdAt,
      updatedAt: deal.deal_updatedAt,
      companyName: deal.company_companyName,
      companyLogo: deal.company_logo,
      origin: deal.route_origin,
      destination: deal.route_destination,
      routeImageUrl: deal.route_imageUrl,
      aircraftName: deal.aircraft_name,
      aircraftType: deal.aircraft_type,
      aircraftCapacity: deal.aircraft_capacity,
      // New fields from existing database
      aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
      routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
      // Placeholder fields
      duration: this.calculateDuration(deal.route_origin, deal.route_destination),
      amenities: this.getAircraftAmenities(deal.aircraft_type),
    };
  }

  async findByCompany(
    companyId: number,
    page: number = 1,
    limit: number = 10,
  ): Promise<{ deals: CharterDealWithRelations[]; total: number }> {
    const offset = (page - 1) * limit;

    let query = this.charterDealRepository
      .createQueryBuilder('deal')
      .leftJoinAndSelect('deal.company', 'company')
      .leftJoinAndSelect('deal.fixedRoute', 'route')
      .leftJoinAndSelect('deal.aircraft', 'aircraft')
      .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
      .where('deal.companyId = :companyId', { companyId });

    const total = await query.getCount();

    const deals = await query
      .select([
        'deal.id',
        'deal.companyId',
        'deal.fixedRouteId',
        'deal.aircraftId',
        'deal.date',
        'deal.time',
        'deal.pricePerSeat',
        'deal.discountPerSeat',
        'deal.pricePerHour',
        'deal.discountPerHour',
        'deal.availableSeats',
        'deal.dealType',
        'deal.createdAt',
        'deal.updatedAt',
        'company.companyName',
        'company.logo',
        'route.origin',
        'route.destination',
        'route.imageUrl',
        'aircraft.name',
        'aircraft.type',
        'aircraft.capacity',
        'GROUP_CONCAT(images.url) as aircraftImages',
      ])
      .groupBy('deal.id')
      .orderBy('deal.date', 'ASC')
      .addOrderBy('deal.time', 'ASC')
      .offset(offset)
      .limit(limit)
      .getRawMany();

    const transformedDeals: CharterDealWithRelations[] = deals.map(deal => ({
      id: deal.deal_id,
      companyId: deal.deal_companyId,
      fixedRouteId: deal.deal_fixedRouteId,
      aircraftId: deal.deal_aircraftId,
      date: deal.deal_date,
      time: deal.deal_time,
      pricePerSeat: deal.deal_pricePerSeat,
      discountPerSeat: deal.deal_discountPerSeat,
      pricePerHour: deal.deal_pricePerHour,
      discountPerHour: deal.deal_discountPerHour || 0,
      availableSeats: deal.deal_availableSeats,
      dealType: deal.deal_dealType,
      createdAt: deal.deal_createdAt,
      updatedAt: deal.deal_updatedAt,
      companyName: deal.company_companyName,
      companyLogo: deal.company_logo,
      origin: deal.route_origin,
      destination: deal.route_destination,
      routeImageUrl: deal.route_imageUrl,
      aircraftName: deal.aircraft_name,
      aircraftType: deal.aircraft_type,
      aircraftCapacity: deal.aircraft_capacity,
      // New fields from existing database
      aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
      routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
      // Placeholder fields
      duration: this.calculateDuration(deal.route_origin, deal.route_destination),
      amenities: this.getAircraftAmenities(deal.aircraft_type),
    }));

    return { deals: transformedDeals, total };
  }

  async findByRoute(
    origin: string,
    destination: string,
    page: number = 1,
    limit: number = 10,
    fromDate?: Date,
    toDate?: Date,
  ): Promise<{ deals: CharterDealWithRelations[]; total: number }> {
    const offset = (page - 1) * limit;

    let query = this.charterDealRepository
      .createQueryBuilder('deal')
      .leftJoinAndSelect('deal.company', 'company')
      .leftJoinAndSelect('deal.fixedRoute', 'route')
      .leftJoinAndSelect('deal.aircraft', 'aircraft')
      .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
      .where('company.status = :status', { status: 'active' })
      .andWhere('aircraft.isAvailable = :isAvailable', { isAvailable: true })
      .andWhere('aircraft.maintenanceStatus = :maintenanceStatus', { maintenanceStatus: 'operational' })
      .andWhere('route.origin = :origin', { origin })
      .andWhere('route.destination = :destination', { destination });

    if (fromDate) {
      query = query.andWhere('deal.date >= :fromDate', { fromDate });
    }

    if (toDate) {
      query = query.andWhere('deal.date <= :toDate', { toDate });
    }

    const total = await query.getCount();

    const deals = await query
      .select([
        'deal.id',
        'deal.companyId',
        'deal.fixedRouteId',
        'deal.aircraftId',
        'deal.date',
        'deal.time',
        'deal.pricePerSeat',
        'deal.discountPerSeat',
        'deal.pricePerHour',
        'deal.discountPerHour',
        'deal.availableSeats',
        'deal.dealType',
        'deal.createdAt',
        'deal.updatedAt',
        'company.companyName',
        'company.logo',
        'route.origin',
        'route.destination',
        'route.imageUrl',
        'aircraft.name',
        'aircraft.type',
        'aircraft.capacity',
        'GROUP_CONCAT(images.url) as aircraftImages',
      ])
      .groupBy('deal.id')
      .orderBy('deal.date', 'ASC')
      .addOrderBy('deal.time', 'ASC')
      .offset(offset)
      .limit(limit)
      .getRawMany();

    const transformedDeals: CharterDealWithRelations[] = deals.map(deal => ({
      id: deal.deal_id,
      companyId: deal.deal_companyId,
      fixedRouteId: deal.deal_fixedRouteId,
      aircraftId: deal.deal_aircraftId,
      date: deal.deal_date,
      time: deal.deal_time,
      pricePerSeat: deal.deal_pricePerSeat,
      discountPerSeat: deal.deal_discountPerSeat,
      pricePerHour: deal.deal_pricePerHour,
      discountPerHour: deal.deal_discountPerHour || 0,
      availableSeats: deal.deal_availableSeats,
      dealType: deal.deal_dealType,
      createdAt: deal.deal_createdAt,
      updatedAt: deal.deal_updatedAt,
      companyName: deal.company_companyName,
      companyLogo: deal.company_logo,
      origin: deal.route_origin,
      destination: deal.route_destination,
      routeImageUrl: deal.route_imageUrl,
      aircraftName: deal.aircraft_name,
      aircraftType: deal.aircraft_type,
      aircraftCapacity: deal.aircraft_capacity,
      // New fields from existing database
      aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
      routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
      // Placeholder fields
      duration: this.calculateDuration(deal.route_origin, deal.route_destination),
      amenities: this.getAircraftAmenities(deal.aircraft_type),
    }));

    return { deals: transformedDeals, total };
  }

  // Placeholder: Calculate duration based on route
  private calculateDuration(origin: string, destination: string): string {
    if (!origin || !destination) return '2h 30m';
    
    const route = `${origin}-${destination}`;
    switch (route) {
      case 'Nairobi-Mombasa':
      case 'Mombasa-Nairobi':
        return '1h 15m';
      case 'Nairobi-Kisumu':
      case 'Kisumu-Nairobi':
        return '1h 5m';
      case 'Nairobi-Kilifi':
      case 'Kilifi-Nairobi':
        return '1h 25m';
      default:
        return '2h 30m';
    }
  }

  // Placeholder: Get amenities based on aircraft type
  // TODO: Add amenities based on aircraft type
  private getAircraftAmenities(aircraftType: string): Array<{icon: string, name: string}> {
    const defaultAmenities = [
      { icon: 'wifi', name: 'Wi-Fi' },
      { icon: 'ac_unit', name: 'Climate Control' },
      { icon: 'airline_seat_recline_normal', name: 'Reclining Seats' },
      { icon: 'luggage', name: 'Baggage Space' },
    ];
    
    if (!aircraftType) return defaultAmenities;
    
    switch (aircraftType.toLowerCase()) {
      case 'jet':
        return [
          ...defaultAmenities,
          { icon: 'tv', name: 'Entertainment' },
          { icon: 'restaurant', name: 'Catering' },
          { icon: 'airline_seat_flat', name: 'Lie-flat Seats' },
        ];
      case 'helicopter':
        return [
          { icon: 'ac_unit', name: 'Climate Control' },
          { icon: 'headset_mic', name: 'Communication' },
          { icon: 'luggage', name: 'Baggage Space' },
        ];
      case 'fixedwing':
        return [
          ...defaultAmenities,
          { icon: 'tv', name: 'Entertainment' },
        ];
      default:
        return defaultAmenities;
    }
  }
} 