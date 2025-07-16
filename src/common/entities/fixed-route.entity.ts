import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CharterDeal } from './charter-deal.entity';

@Entity('fixed_routes')
export class FixedRoute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  origin: string;

  @Column({ type: 'varchar', length: 50 })
  destination: string;

  @Column({ name: 'imageUrl', type: 'varchar', length: 255 })
  imageUrl: string;

  @Column({ name: 'imagePublicId', type: 'varchar', length: 255 })
  imagePublicId: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  // Relations
  @OneToMany(() => CharterDeal, deal => deal.fixedRoute)
  deals: CharterDeal[];
} 