import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ExperiencesService } from './experiences.service';
import { 
  ExperiencesResponseDto, 
  ExperienceDetailResponseDto,
  ExperienceCardDto 
} from './dto/experience-response.dto';

@ApiTags('Experiences')
@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all experiences grouped by category' })
  @ApiResponse({ 
    status: 200, 
    description: 'Experiences retrieved successfully',
    type: ExperiencesResponseDto
  })
  async getAllExperiences() {
    const categories = await this.experiencesService.getAllExperiences();
    
    return {
      success: true,
      message: 'Experiences retrieved successfully',
      data: {
        categories,
      },
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get experience details by ID' })
  @ApiParam({ name: 'id', description: 'Experience ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Experience details retrieved successfully',
    type: ExperienceDetailResponseDto
  })
  @ApiResponse({ status: 404, description: 'Experience not found' })
  async getExperienceById(@Param('id', ParseIntPipe) id: number) {
    const experience = await this.experiencesService.getExperienceById(id);
    
    return {
      success: true,
      message: 'Experience details retrieved successfully',
      data: experience,
    };
  }

  @Get('category/:category')
  @ApiOperation({ summary: 'Get experiences by category' })
  @ApiParam({ name: 'category', description: 'Experience category' })
  @ApiResponse({ 
    status: 200, 
    description: 'Experiences by category retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        message: { type: 'string' },
        data: {
          type: 'array',
          items: { $ref: '#/components/schemas/ExperienceCardDto' }
        }
      }
    }
  })
  async getExperiencesByCategory(@Param('category') category: string) {
    const experiences = await this.experiencesService.getExperiencesByCategory(category);
    
    return {
      success: true,
      message: `Experiences in ${category} category retrieved successfully`,
      data: experiences,
    };
  }

  @Get(':id/schedules')
  @ApiOperation({ summary: 'Get experience schedules by ID and date' })
  @ApiParam({ name: 'id', description: 'Experience ID' })
  @ApiQuery({ name: 'date', description: 'Date in YYYY-MM-DD format', required: false })
  @ApiResponse({ 
    status: 200, 
    description: 'Experience schedules retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        message: { type: 'string' },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              startTime: { type: 'string', format: 'date-time' },
              endTime: { type: 'string', format: 'date-time' },
              price: { type: 'number' },
              priceUnit: { type: 'string' },
              durationMinutes: { type: 'number' },
              seatsAvailable: { type: 'number' },
              status: { type: 'string' },
              time: { type: 'string' },
              available: { type: 'boolean' }
            }
          }
        }
      }
    }
  })
  @ApiResponse({ status: 404, description: 'Experience not found' })
  async getExperienceSchedules(
    @Param('id', ParseIntPipe) id: number,
    @Query('date') date?: string
  ) {
    const schedules = await this.experiencesService.getExperienceSchedules(id, date);
    
    return {
      success: true,
      message: 'Experience schedules retrieved successfully',
      data: schedules,
    };
  }
}
