import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CharterDeal } from './charter-deal.entity';

@Entity('aircrafts')
export class Aircraft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'companyId', type: 'int' })
  companyId: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'registrationNumber', type: 'varchar', length: 20, unique: true })
  registrationNumber: string;

  @Column({ 
    type: 'enum', 
    enum: ['helicopter', 'fixedWing', 'jet', 'glider', 'seaplane', 'ultralight', 'balloon', 'tiltrotor', 'gyroplane', 'airship']
  })
  type: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  model: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  manufacturer: string;

  @Column({ name: 'yearManufactured', type: 'int', nullable: true })
  yearManufactured: number;

  @Column({ type: 'int' })
  capacity: number;

  @Column({ name: 'isAvailable', type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({ 
    name: 'maintenanceStatus', 
    type: 'enum', 
    enum: ['operational', 'maintenance', 'out_of_service'],
    default: 'operational'
  })
  maintenanceStatus: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  // Relations
  @OneToMany(() => CharterDeal, deal => deal.aircraft)
  deals: CharterDeal[];
} 