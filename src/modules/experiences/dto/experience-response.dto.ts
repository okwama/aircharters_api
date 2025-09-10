import { ApiProperty } from '@nestjs/swagger';
import { PriceUnit, ScheduleStatus } from '../../../common/entities/experience-schedule.entity';

export class ExperienceScheduleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  startTime: Date;

  @ApiProperty({ required: false })
  endTime?: Date;

  @ApiProperty()
  price: number;

  @ApiProperty({ enum: PriceUnit })
  priceUnit: PriceUnit;

  @ApiProperty()
  durationMinutes: number;

  @ApiProperty()
  seatsAvailable: number;

  @ApiProperty({ enum: ScheduleStatus })
  status: ScheduleStatus;
}

export class ExperienceImageDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  imageSlot: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  sortOrder: number;
}

export class ExperienceDetailDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  city: string;

  @ApiProperty({ required: false })
  locationName?: string;

  @ApiProperty()
  termsConditions: string;

  @ApiProperty({ type: [ExperienceImageDto] })
  images: ExperienceImageDto[];

  @ApiProperty({ type: [ExperienceScheduleDto] })
  schedules: ExperienceScheduleDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class ExperienceCardDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  rating: string;

  @ApiProperty()
  seatsAvailable: number;
}

export class ExperienceCategoryDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ type: [ExperienceCardDto] })
  deals: ExperienceCardDto[];
}

export class ExperiencesResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: [ExperienceCategoryDto] })
  data: {
    categories: ExperienceCategoryDto[];
  };
}

export class ExperienceDetailResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: ExperienceDetailDto })
  data: ExperienceDetailDto;
}
