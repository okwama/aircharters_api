import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { CharterDealsService } from './charter-deals.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('Charter Deals')
@Controller('charter-deals')
export class CharterDealsController {
  constructor(private readonly charterDealsService: CharterDealsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all charter deals with filters' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns paginated charter deals with related data',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              companyId: { type: 'number' },
              fixedRouteId: { type: 'number' },
              aircraftId: { type: 'number' },
              date: { type: 'string', format: 'date' },
              time: { type: 'string' },
              pricePerSeat: { type: 'number', nullable: true },
              discountPerSeat: { type: 'number' },
              pricePerHour: { type: 'number', nullable: true },
              availableSeats: { type: 'number' },
              dealType: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
              companyName: { type: 'string' },
              companyLogo: { type: 'string', nullable: true },
              origin: { type: 'string' },
              destination: { type: 'string' },
              routeImageUrl: { type: 'string' },
              aircraftName: { type: 'string' },
              aircraftType: { type: 'string' },
              aircraftCapacity: { type: 'number' },
              aircraftImages: { type: 'array', items: { type: 'string' } },
              routeImages: { type: 'array', items: { type: 'string' } },
              duration: { type: 'string' },
              amenities: { type: 'array', items: { type: 'object' } },
            },
          },
        },
        total: { type: 'number' },
        page: { type: 'number' },
        limit: { type: 'number' },
      },
    },
  })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Search query for company, route, or aircraft' })
  @ApiQuery({ name: 'dealType', required: false, enum: ['privateCharter', 'jetSharing'], description: 'Filter by deal type' })
  @ApiQuery({ name: 'fromDate', required: false, type: String, description: 'Filter deals from this date (YYYY-MM-DD)' })
  @ApiQuery({ name: 'toDate', required: false, type: String, description: 'Filter deals to this date (YYYY-MM-DD)' })
  async getCharterDeals(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('search') search?: string,
    @Query('dealType') dealType?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    
    const fromDateObj = fromDate ? new Date(fromDate) : undefined;
    const toDateObj = toDate ? new Date(toDate) : undefined;

    const result = await this.charterDealsService.findAllWithRelations(
      pageNum,
      limitNum,
      search,
      dealType,
      fromDateObj,
      toDateObj,
    );

    return {
      success: true,
      data: result.deals,
      total: result.total,
      page: pageNum,
      limit: limitNum,
    };
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get charter deal by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns charter deal details',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        data: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            companyId: { type: 'number' },
            fixedRouteId: { type: 'number' },
            aircraftId: { type: 'number' },
            date: { type: 'string', format: 'date' },
            time: { type: 'string' },
            pricePerSeat: { type: 'number', nullable: true },
            discountPerSeat: { type: 'number' },
            pricePerHour: { type: 'number', nullable: true },
            discountPerHour: { type: 'number' },
            availableSeats: { type: 'number' },
            dealType: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            companyName: { type: 'string' },
            companyLogo: { type: 'string', nullable: true },
            origin: { type: 'string' },
            destination: { type: 'string' },
            routeImageUrl: { type: 'string' },
            aircraftName: { type: 'string' },
            aircraftType: { type: 'string' },
            aircraftCapacity: { type: 'number' },
          },
        },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Deal not found' })
  @ApiParam({ name: 'id', type: Number, description: 'Charter deal ID' })
  async getCharterDealById(@Param('id') id: string) {
    const dealId = parseInt(id, 10);
    const deal = await this.charterDealsService.findById(dealId);

    if (!deal) {
      return {
        success: false,
        message: 'Deal not found',
      };
    }

    return {
      success: true,
      data: deal,
    };
  }

  @Get('company/:companyId')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get charter deals by company ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns paginated charter deals for a specific company',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              companyId: { type: 'number' },
              fixedRouteId: { type: 'number' },
              aircraftId: { type: 'number' },
              date: { type: 'string', format: 'date' },
              time: { type: 'string' },
              pricePerSeat: { type: 'number', nullable: true },
              discountPerSeat: { type: 'number' },
              pricePerHour: { type: 'number', nullable: true },
              discountPerHour: { type: 'number' },
              availableSeats: { type: 'number' },
              dealType: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
              companyName: { type: 'string' },
              companyLogo: { type: 'string', nullable: true },
              origin: { type: 'string' },
              destination: { type: 'string' },
              routeImageUrl: { type: 'string' },
              aircraftName: { type: 'string' },
              aircraftType: { type: 'string' },
              aircraftCapacity: { type: 'number' },
            },
          },
        },
        total: { type: 'number' },
        page: { type: 'number' },
        limit: { type: 'number' },
      },
    },
  })
  @ApiParam({ name: 'companyId', type: Number, description: 'Company ID' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' })
  async getCharterDealsByCompany(
    @Param('companyId') companyId: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const companyIdNum = parseInt(companyId, 10);
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const result = await this.charterDealsService.findByCompany(
      companyIdNum,
      pageNum,
      limitNum,
    );

    return {
      success: true,
      data: result.deals,
      total: result.total,
      page: pageNum,
      limit: limitNum,
    };
  }

  @Get('route/:origin/:destination')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get charter deals by route' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns paginated charter deals for a specific route',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              companyId: { type: 'number' },
              fixedRouteId: { type: 'number' },
              aircraftId: { type: 'number' },
              date: { type: 'string', format: 'date' },
              time: { type: 'string' },
              pricePerSeat: { type: 'number', nullable: true },
              discountPerSeat: { type: 'number' },
              priceFullCharter: { type: 'number', nullable: true },
              availableSeats: { type: 'number' },
              dealType: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
              companyName: { type: 'string' },
              companyLogo: { type: 'string', nullable: true },
              origin: { type: 'string' },
              destination: { type: 'string' },
              routeImageUrl: { type: 'string' },
              aircraftName: { type: 'string' },
              aircraftType: { type: 'string' },
              aircraftCapacity: { type: 'number' },
            },
          },
        },
        total: { type: 'number' },
        page: { type: 'number' },
        limit: { type: 'number' },
      },
    },
  })
  @ApiParam({ name: 'origin', type: String, description: 'Origin city' })
  @ApiParam({ name: 'destination', type: String, description: 'Destination city' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' })
  @ApiQuery({ name: 'fromDate', required: false, type: String, description: 'Filter deals from this date (YYYY-MM-DD)' })
  @ApiQuery({ name: 'toDate', required: false, type: String, description: 'Filter deals to this date (YYYY-MM-DD)' })
  async getCharterDealsByRoute(
    @Param('origin') origin: string,
    @Param('destination') destination: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    
    const fromDateObj = fromDate ? new Date(fromDate) : undefined;
    const toDateObj = toDate ? new Date(toDate) : undefined;

    const result = await this.charterDealsService.findByRoute(
      origin,
      destination,
      pageNum,
      limitNum,
      fromDateObj,
      toDateObj,
    );

    return {
      success: true,
      data: result.deals,
      total: result.total,
      page: pageNum,
      limit: limitNum,
    };
  }
} 