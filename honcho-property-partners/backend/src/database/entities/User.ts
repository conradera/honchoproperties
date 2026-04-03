import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Property } from './Property';
import { Booking } from './Booking';

export enum UserRole {
  TENANT = 'tenant',
  LANDLORD = 'landlord',
  AGENT = 'agent',
  ADMIN = 'admin',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  phone!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.TENANT })
  role!: UserRole;

  @Column({ nullable: true })
  avatar!: string;

  @Column({ default: false })
  isVerified!: boolean;

  @Column({ nullable: true })
  bio!: string;

  @Column({ nullable: true })
  company!: string;

  @OneToMany(() => Property, (property) => property.owner)
  properties!: Property[];

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings!: Booking[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}