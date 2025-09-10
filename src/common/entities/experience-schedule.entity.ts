import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ExperienceTemplate } from './experience-template.entity';
import { ChartersCompany } from './charters-company.entity';
import { Aircraft } from './aircraft.entity';

export enum PriceUnit {
  PER_PERSON = 'per_person',
  PER_GROUP = 'per_group',
  PER_HOUR = 'per_hour',
  PER_FLIGHT = 'per_flight',
}

export enum ScheduleStatus {
  SCHEDULED = 'scheduled',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Entity('experience_schedules')
export class ExperienceSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'experienceId', type: 'int' })
  experienceId: number;

  @Column({ name: 'companyId', type: 'int' })
  companyId: number;

  @Column({ name: 'aircraftId', type: 'int', nullable: true })
  aircraftId: number;

  @Column({ name: 'startTime', type: 'datetime' })
  startTime: Date;

  @Column({ name: 'endTime', type: 'datetime', nullable: true })
  endTime: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ name: 'priceUnit', type: 'enum', enum: PriceUnit, default: PriceUnit.PER_PERSON })
  priceUnit: PriceUnit;

  @Column({ name: 'durationMinutes', type: 'int' })
  durationMinutes: number;

  @Column({ name: 'seatsAvailable', type: 'int' })
  seatsAvailable: number;

  @Column({ type: 'enum', enum: ScheduleStatus, default: ScheduleStatus.SCHEDULED })
  status: ScheduleStatus;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  // Relations
  @ManyToOne(() => ExperienceTemplate, experience => experience.schedules)
  @JoinColumn({ name: 'experienceId' })
  experience: ExperienceTemplate;

  @ManyToOne(() => ChartersCompany)
  @JoinColumn({ name: 'companyId' })
  company: ChartersCompany;

  @ManyToOne(() => Aircraft)
  @JoinColumn({ name: 'aircraftId' })
  aircraft: Aircraft;
}
