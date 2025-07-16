import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from './booking.entity';

@Entity('passengers')
export class Passenger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'booking_id', type: 'varchar', length: 255 })
  @Index()
  bookingId: string;

  @Column({ name: 'first_name', type: 'varchar', length: 100 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  nationality: string;

  @Column({ name: 'id_passport_number', type: 'varchar', length: 100, nullable: true })
  idPassportNumber: string;

  @Column({ name: 'is_user', type: 'boolean', default: false })
  isUser: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Computed property for full name
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  // Computed property for display name
  get displayName(): string {
    return this.fullName || 'Unnamed Passenger';
  }

  // Relations
  @ManyToOne(() => Booking, booking => booking.passengers)
  @JoinColumn({ name: 'booking_id' })
  booking: Booking;
} 
