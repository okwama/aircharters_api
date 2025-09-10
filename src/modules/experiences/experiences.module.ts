import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperiencesController } from './experiences.controller';
import { ExperiencesService } from './experiences.service';
import { ExperienceTemplate } from '../../common/entities/experience-template.entity';
import { ExperienceImage } from '../../common/entities/experience-image.entity';
import { ExperienceSchedule } from '../../common/entities/experience-schedule.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ExperienceTemplate,
      ExperienceImage,
      ExperienceSchedule,
    ]),
  ],
  controllers: [ExperiencesController],
  providers: [ExperiencesService],
  exports: [ExperiencesService],
})
export class ExperiencesModule {}
