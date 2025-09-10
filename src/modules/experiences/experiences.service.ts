import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExperienceTemplate } from '../../common/entities/experience-template.entity';
import { ExperienceImage } from '../../common/entities/experience-image.entity';
import { ExperienceSchedule } from '../../common/entities/experience-schedule.entity';
import { ExperienceCardDto, ExperienceCategoryDto, ExperienceDetailDto } from './dto/experience-response.dto';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectRepository(ExperienceTemplate)
    private readonly experienceTemplateRepository: Repository<ExperienceTemplate>,
    @InjectRepository(ExperienceImage)
    private readonly experienceImageRepository: Repository<ExperienceImage>,
    @InjectRepository(ExperienceSchedule)
    private readonly experienceScheduleRepository: Repository<ExperienceSchedule>,
  ) {}

  async getAllExperiences(): Promise<ExperienceCategoryDto[]> {
    // Get all active experiences with their images and schedules
    const experiences = await this.experienceTemplateRepository
      .createQueryBuilder('et')
      .leftJoinAndSelect('et.images', 'ei')
      .leftJoinAndSelect('et.schedules', 'es')
      .leftJoinAndSelect('et.company', 'c')
      .where('et.isActive = :isActive', { isActive: true })
      .orderBy('et.createdAt', 'DESC')
      .getMany();

    // Group experiences by category (using city as category for now)
    const categoriesMap = new Map<string, ExperienceTemplate[]>();
    
    experiences.forEach(experience => {
      const category = this.getCategoryFromExperience(experience);
      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, []);
      }
      categoriesMap.get(category)!.push(experience);
    });

    // Transform to DTO format
    const categories: ExperienceCategoryDto[] = [];
    categoriesMap.forEach((experiences, categoryTitle) => {
      const deals = experiences.map(exp => this.transformToCardDto(exp));
      categories.push({
        title: categoryTitle,
        deals,
      });
    });

    return categories;
  }

  async getExperienceById(id: number): Promise<ExperienceDetailDto> {
    const experience = await this.experienceTemplateRepository
      .createQueryBuilder('et')
      .leftJoinAndSelect('et.images', 'ei')
      .leftJoinAndSelect('et.schedules', 'es')
      .leftJoinAndSelect('et.company', 'c')
      .where('et.id = :id', { id })
      .andWhere('et.isActive = :isActive', { isActive: true })
      .orderBy('ei.sortOrder', 'ASC')
      .getOne();

    if (!experience) {
      throw new NotFoundException(`Experience with ID ${id} not found`);
    }

    return this.transformToDetailDto(experience);
  }

  async getExperiencesByCategory(category: string): Promise<ExperienceCardDto[]> {
    const experiences = await this.experienceTemplateRepository
      .createQueryBuilder('et')
      .leftJoinAndSelect('et.images', 'ei')
      .leftJoinAndSelect('et.schedules', 'es')
      .leftJoinAndSelect('et.company', 'c')
      .where('et.isActive = :isActive', { isActive: true })
      .andWhere('et.city LIKE :category OR et.country LIKE :category', { 
        category: `%${category}%` 
      })
      .orderBy('et.createdAt', 'DESC')
      .getMany();

    return experiences.map(exp => this.transformToCardDto(exp));
  }

  async getExperienceSchedules(id: number, date?: string): Promise<any[]> {
    const queryBuilder = this.experienceScheduleRepository
      .createQueryBuilder('es')
      .where('es.experienceId = :id', { id })
      .andWhere('es.status = :status', { status: 'scheduled' });

    // If date is provided, filter by that specific date
    if (date) {
      const targetDate = new Date(date);
      const nextDate = new Date(targetDate);
      nextDate.setDate(nextDate.getDate() + 1);
      
      queryBuilder
        .andWhere('es.startTime >= :startDate', { startDate: targetDate })
        .andWhere('es.startTime < :endDate', { endDate: nextDate });
    }

    const schedules = await queryBuilder
      .orderBy('es.startTime', 'ASC')
      .getMany();

    return schedules.map(schedule => ({
      id: schedule.id,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      price: schedule.price,
      priceUnit: schedule.priceUnit,
      durationMinutes: schedule.durationMinutes,
      seatsAvailable: schedule.seatsAvailable,
      status: schedule.status,
      time: schedule.startTime.toTimeString().substring(0, 5), // Format as HH:MM
      available: schedule.seatsAvailable > 0
    }));
  }

  private getCategoryFromExperience(experience: ExperienceTemplate): string {
    // Map experiences to categories based on title or location
    const title = experience.title.toLowerCase();
    const city = experience.city.toLowerCase();
    
    if (title.includes('helicopter') || title.includes('aerial') || title.includes('skyline')) {
      return 'Aerial Sightseeing Tours';
    } else if (title.includes('ski') || title.includes('snow')) {
      return 'Heli Skiing';
    } else if (title.includes('fish') || title.includes('fishing')) {
      return 'Fishing';
    } else if (title.includes('wine') || title.includes('dine') || title.includes('restaurant')) {
      return 'Fly and Dine';
    } else if (title.includes('skydive') || title.includes('parachute')) {
      return 'Skydiving';
    } else if (title.includes('hike') || title.includes('trek') || title.includes('mountain')) {
      return 'Hiking';
    } else if (title.includes('surf') || title.includes('wave')) {
      return 'Surfing';
    } else if (title.includes('romantic') || title.includes('sunset') || title.includes('couple')) {
      return 'Romantic';
    } else if (title.includes('northern lights') || title.includes('aurora') || title.includes('seasonal')) {
      return 'Seasonal';
    } else {
      return 'Adventure Tours';
    }
  }

  private transformToCardDto(experience: ExperienceTemplate): ExperienceCardDto {
    // Get the first image (main image)
    const mainImage = experience.images?.find(img => img.imageSlot === 'image1') || 
                     experience.images?.[0];
    
    // Get the first available schedule for pricing
    const firstSchedule = experience.schedules?.[0];
    
    // Calculate average rating (placeholder for now)
    const rating = '4.8';
    
    return {
      id: experience.id,
      imageUrl: mainImage?.url || 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: experience.title,
      location: `${experience.city}, ${experience.country}`,
      duration: firstSchedule ? `${firstSchedule.durationMinutes} minutes` : 'Varies',
      price: firstSchedule ? `$${firstSchedule.price}` : 'Contact for pricing',
      rating,
      seatsAvailable: firstSchedule?.seatsAvailable || 0,
    };
  }

  private transformToDetailDto(experience: ExperienceTemplate): ExperienceDetailDto {
    return {
      id: experience.id,
      title: experience.title,
      description: experience.description,
      country: experience.country,
      city: experience.city,
      locationName: experience.locationName,
      termsConditions: experience.termsConditions || '',
      images: experience.images?.map(img => ({
        id: img.id,
        imageSlot: img.imageSlot,
        url: img.url,
        sortOrder: img.sortOrder,
      })) || [],
      schedules: experience.schedules?.map(schedule => ({
        id: schedule.id,
        startTime: schedule.startTime,
        endTime: schedule.endTime,
        price: schedule.price,
        priceUnit: schedule.priceUnit,
        durationMinutes: schedule.durationMinutes,
        seatsAvailable: schedule.seatsAvailable,
        status: schedule.status,
      })) || [],
      createdAt: experience.createdAt,
      updatedAt: experience.updatedAt,
    };
  }
}
