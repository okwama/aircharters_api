import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { CharterDeal } from './charter-deal.entity';
import { ChartersCompany } from './charters-company.entity';
import { Passenger } from './passenger.entity';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export enum PaymentMethod {
  CARD = 'card',
  MPESA = 'mpesa',
  WALLET = 'wallet',
}

@Entity('bookings')
export class Booking {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ name: 'userId', type: 'varchar', length: 255 })
  userId: string;

  @Column({ name: 'dealId' })
  dealId: number;

  @Column({ name: 'company_id', type: 'int' })
  companyId: number;

  @Column({ name: 'totalPrice', type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ name: 'onboardDining', type: 'boolean', default: false })
  onboardDining: boolean;

  @Column({ name: 'groundTransportation', type: 'boolean', default: false })
  groundTransportation: boolean;

  @Column({ name: 'billingRegion', type: 'varchar', length: 100, nullable: true })
  billingRegion: string;

  @Column({ 
    name: 'paymentMethod', 
    type: 'enum', 
    enum: PaymentMethod, 
    nullable: true 
  })
  paymentMethod: PaymentMethod;

  @Column({ 
    name: 'bookingStatus', 
    type: 'enum', 
    enum: BookingStatus, 
    default: BookingStatus.PENDING 
  })
  bookingStatus: BookingStatus;

  @Column({ 
    name: 'paymentStatus', 
    type: 'enum', 
    enum: PaymentStatus, 
    default: PaymentStatus.PENDING 
  })
  paymentStatus: PaymentStatus;

  @Column({ name: 'referenceNumber', type: 'varchar', length: 50 })
  referenceNumber: string;

  @Column({ name: 'paymentTransactionId', type: 'varchar', length: 255, nullable: true })
  paymentTransactionId: string;

  @Column({ name: 'loyalty_points_earned', type: 'int', default: 0 })
  loyaltyPointsEarned: number;

  @Column({ name: 'loyalty_points_redeemed', type: 'int', default: 0 })
  loyaltyPointsRedeemed: number;

  @Column({ name: 'wallet_amount_used', type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  walletAmountUsed: number;

  @Column({ name: 'specialRequirements', type: 'text', nullable: true })
  specialRequirements: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  // Relations
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => CharterDeal)
  @JoinColumn({ name: 'dealId' })
  deal: CharterDeal;

  @ManyToOne(() => ChartersCompany)
  @JoinColumn({ name: 'company_id' })
  company: ChartersCompany;

  @OneToMany(() => Passenger, passenger => passenger.booking)
  passengers: Passenger[];

  // Computed properties
  get formattedPrice(): string {
    return `$${this.totalPrice.toFixed(2)}`;
  }

  get isConfirmed(): boolean {
    return this.bookingStatus === BookingStatus.CONFIRMED || 
           this.bookingStatus === BookingStatus.COMPLETED;
  }

  get isPaid(): boolean {
    return this.paymentStatus === PaymentStatus.PAID;
  }

  get canBeCancelled(): boolean {
    return this.bookingStatus === BookingStatus.PENDING || 
           this.bookingStatus === BookingStatus.CONFIRMED;
  }
} 
