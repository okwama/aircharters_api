import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ChartersCompany } from './charters-company.entity';
import { FixedRoute } from './fixed-route.entity';
import { Aircraft } from './aircraft.entity';

@Entity('charter_deals')
export class CharterDeal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'companyId', type: 'int' })
  companyId: number;

  @Column({ name: 'fixedRouteId', type: 'int' })
  fixedRouteId: number;

  @Column({ name: 'aircraftId', type: 'int' })
  aircraftId: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  pricePerSeat: number;

  @Column({ type: 'int', default: 0 })
  discountPerSeat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  pricePerHour: number;

  @Column({ type: 'int' })
  availableSeats: number;

  @Column({ 
    type: 'enum', 
    enum: ['privateCharter', 'jetSharing'],
    default: 'privateCharter'
  })
  dealType: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  // Relations
  @ManyToOne(() => ChartersCompany, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'companyId' })
  company: ChartersCompany;

  @ManyToOne(() => FixedRoute, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fixedRouteId' })
  fixedRoute: FixedRoute;

  @ManyToOne(() => Aircraft, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'aircraftId' })
  aircraft: Aircraft;
} 