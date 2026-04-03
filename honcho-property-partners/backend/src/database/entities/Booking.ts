import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Property } from './Property';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  propertyId!: string;

  @ManyToOne(() => Property, (property) => property.bookings)
  @JoinColumn({ name: 'propertyId' })
  property!: Property;

  @Column()
  userId!: string;

  @ManyToOne(() => User, (user) => user.bookings)
  @JoinColumn({ name: 'userId' })
  user!: User;

  @Column()
  agentId!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'agentId' })
  agent!: User;

  @Column({ type: 'date' })
  date!: Date;

  @Column()
  time!: string;

  @Column({ type: 'enum', enum: BookingStatus, default: BookingStatus.PENDING })
  status!: BookingStatus;

  @Column({ nullable: true })
  message!: string;

  @CreateDateColumn()
  createdAt!: Date;
}