import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { DirectCharterService } from './direct-charter.service';
import { SearchDirectCharterDto } from './dto/search-direct-charter.dto';
import { BookDirectCharterDto } from './dto/book-direct-charter.dto';

@ApiTags('Direct Charter')
@Controller('direct-charter')
export class DirectCharterController {
  constructor(private readonly directCharterService: DirectCharterService) {}

  @Post('search')
  @ApiOperation({ summary: 'Search for available aircraft for direct charter' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns available aircraft sorted by priority and price' 
  })
  @ApiResponse({ status: 400, description: 'Invalid search parameters' })
  async searchAvailableAircraft(@Body() searchDto: SearchDirectCharterDto) {
    try {
      const results = await this.directCharterService.searchAvailableAircraft(searchDto);
      return {
        success: true,
        data: results,
        message: `Found ${results.length} available aircraft`,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Failed to search for available aircraft',
        data: [],
      };
    }
  }

  @Post('book')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Book a direct charter flight' })
  @ApiResponse({ 
    status: 201, 
    description: 'Booking confirmed successfully' 
  })
  @ApiResponse({ status: 400, description: 'Aircraft not available or invalid booking data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async bookDirectCharter(
    @Body() bookDto: BookDirectCharterDto,
    @Request() req: any
  ) {
    try {
      const userId = req.user.id;
      const result = await this.directCharterService.bookDirectCharter(bookDto, userId);
      
      return {
        success: true,
        data: result,
        message: 'Direct charter booking confirmed successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Failed to book direct charter',
        data: null,
      };
    }
  }

  @Get('health')
  @ApiOperation({ summary: 'Check direct charter service health' })
  @ApiResponse({ status: 200, description: 'Service is healthy' })
  async healthCheck() {
    return {
      success: true,
      message: 'Direct charter service is running',
      timestamp: new Date().toISOString(),
    };
  }
} 