import {
  Controller,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { AircraftAvailabilityService } from './aircraft-availability.service';
import { AircraftAvailabilitySearchDto, AvailableAircraftDto } from './dto/aircraft-availability.dto';

@ApiTags('Aircraft Availability')
@Controller('aircraft-availability')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AircraftAvailabilityController {
  constructor(
    private readonly aircraftAvailabilityService: AircraftAvailabilityService,
  ) {}

  @Post('search')
  @ApiOperation({ summary: 'Search for available aircraft' })
  @ApiResponse({
    status: 200,
    description: 'Available aircraft found',
    type: [AvailableAircraftDto],
  })
  @ApiBody({ type: AircraftAvailabilitySearchDto })
  async searchAvailableAircraft(
    @Body() searchDto: AircraftAvailabilitySearchDto,
  ): Promise<AvailableAircraftDto[]> {
    return this.aircraftAvailabilityService.searchAvailableAircraft(searchDto);
  }
} 