import { Response } from 'express';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  propertyType: string;
  listingStatus: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  address: string;
  city: string;
  area: string;
  latitude?: number;
  longitude?: number;
  features: string[];
  ownerId: string;
  agentId?: string;
  agent?: any;
  owner?: any;
  isFeatured: boolean;
  isVerified: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  email: string;
  password?: string;
  name: string;
  phone: string;
  role: string;
  avatar?: string;
  isVerified: boolean;
  bio?: string;
  company?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  agentId: string;
  date: Date;
  time: string;
  status: string;
  message?: string;
  createdAt: Date;
  property?: Property;
  user?: User;
  agent?: User;
}

const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa in Kololo',
    description: 'Stunning 5-bedroom villa with panoramic views, featuring a private infinity pool, meticulously landscaped gardens, and spacious living areas with high ceilings.',
    price: 2500000000,
    propertyType: 'villa',
    listingStatus: 'sale',
    status: 'available',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    address: 'Kololo Drive, Plot 45',
    city: 'Kampala',
    area: 'Kololo',
    latitude: 0.3476,
    longitude: 32.5825,
    features: ['Pool', 'Garden', 'Garage', 'CCTV Security', 'Solar Power'],
    ownerId: '1',
    agentId: '1',
    isFeatured: true,
    isVerified: true,
    views: 1250,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Modern Apartment in Ntinda',
    description: 'Contemporary 2-bedroom apartment with modern finishes, balcony, and city views.',
    price: 850000000,
    propertyType: 'apartment',
    listingStatus: 'rent',
    status: 'available',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    address: 'Ntinda Road',
    city: 'Kampala',
    area: 'Ntinda',
    features: ['Balcony', 'Gym', 'Security'],
    ownerId: '2',
    isFeatured: true,
    isVerified: true,
    views: 890,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Beachfront Villa in Entebbe',
    description: 'Exclusive beachfront property with private dock and stunning lake views.',
    price: 4500000000,
    propertyType: 'villa',
    listingStatus: 'sale',
    status: 'available',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 6000,
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
    address: 'Lakeside Drive',
    city: 'Entebbe',
    area: 'Lakeside',
    features: ['Beach Access', 'Dock', 'Pool'],
    ownerId: '3',
    isFeatured: true,
    isVerified: true,
    views: 2100,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    title: 'Commercial Space in Kampala CBD',
    description: 'Prime office space in central business district with modern amenities.',
    price: 1800000000,
    propertyType: 'commercial',
    listingStatus: 'lease',
    status: 'available',
    bedrooms: 0,
    bathrooms: 2,
    sqft: 2500,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
    address: 'Industrial Area',
    city: 'Kampala',
    area: 'CBD',
    features: ['Parking', '24/7 Access'],
    ownerId: '4',
    isFeatured: true,
    isVerified: true,
    views: 650,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    title: 'Family Home in Naguru',
    description: 'Spacious 4-bedroom family home with garden and garage.',
    price: 1650000000,
    propertyType: 'house',
    listingStatus: 'sale',
    status: 'available',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    address: 'Naguru Hill',
    city: 'Kampala',
    area: 'Naguru',
    features: ['Garden', 'Garage', 'Security'],
    ownerId: '5',
    isFeatured: false,
    isVerified: true,
    views: 780,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6',
    title: 'Penthouse in Muyenga',
    description: 'Luxurious penthouse with stunning city views and rooftop access.',
    price: 3200000000,
    propertyType: 'apartment',
    listingStatus: 'sale',
    status: 'available',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3200,
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    address: 'Muyenga Heights',
    city: 'Kampala',
    area: 'Muyenga',
    features: ['Rooftop', 'Concierge', 'Gym'],
    ownerId: '6',
    isFeatured: true,
    isVerified: true,
    views: 1500,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const users: User[] = [
  {
    id: '1',
    email: 'agent@honcho.co.ug',
    name: 'Sarah Nakato',
    phone: '+256 700 123 456',
    role: 'agent',
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const bookings: Booking[] = [];

export const db = { properties, users, bookings };