import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './User';
import { Booking } from './Booking';

export enum PropertyType {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  VILLA = 'villa',
  OFFICE = 'office',
  WAREHOUSE = 'warehouse',
  LAND = 'land',
  COMMERCIAL = 'commercial',
}

export enum ListingStatus {
  SALE = 'sale',
  RENT = 'rent',
  LEASE = 'lease',
}

export enum PropertyStatus {
  AVAILABLE = 'available',
  PENDING = 'pending',
  SOLD = 'sold',
  LEASED = 'leased',
}

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('text')
  description!: string;

  @Column('decimal', { precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'enum', enum: PropertyType })
  propertyType!: PropertyType;

  @Column({ type: 'enum', enum: ListingStatus })
  listingStatus!: ListingStatus;

  @Column({ type: 'enum', enum: PropertyStatus, default: PropertyStatus.AVAILABLE })
  status!: PropertyStatus;

  @Column({ default: 0 })
  bedrooms!: number;

  @Column({ default: 0 })
  bathrooms!: number;

  @Column({ default: 0 })
  sqft!: number;

  @Column('simple-array', { nullable: true })
  images!: string[];

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column({ nullable: true })
  area!: string;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitude!: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitude!: number;

  @Column('simple-array', { nullable: true })
  features!: string[];

  @Column()
  ownerId!: string;

  @ManyToOne(() => User, (user) => user.properties)
  @JoinColumn({ name: 'ownerId' })
  owner!: User;

  @Column({ nullable: true })
  agentId!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'agentId' })
  agent!: User;

  @Column({ default: false })
  isFeatured!: boolean;

  @Column({ default: false })
  isVerified!: boolean;

  @Column({ default: 0 })
  views!: number;

  @OneToMany(() => Booking, (booking) => booking.property)
  bookings!: Booking[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}