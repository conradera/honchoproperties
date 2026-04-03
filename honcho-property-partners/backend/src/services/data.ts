import { Request, Response } from 'express';

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
  features: string[];
  ownerId: string;
  agentId?: string;
  isFeatured: boolean;
  isVerified: boolean;
  views: number;
  createdAt: Date;
}

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: string;
  avatar?: string;
  isVerified: boolean;
  createdAt: Date;
}

const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa in Kololo',
    description: 'Stunning 5-bedroom villa with panoramic views',
    price: 2500000000,
    propertyType: 'villa',
    listingStatus: 'sale',
    status: 'available',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    address: 'Kololo Drive',
    city: 'Kampala',
    area: 'Kololo',
    features: ['Pool', 'Garden', 'Garage'],
    ownerId: '1',
    agentId: '1',
    isFeatured: true,
    isVerified: true,
    views: 1250,
    createdAt: new Date(),
  },
];

export const propertyService = {
  findAll: async (query: any) => {
    let filtered = [...properties];
    if (query.search) {
      filtered = filtered.filter(p => p.title.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.propertyType && query.propertyType !== 'All Types') {
      filtered = filtered.filter(p => p.propertyType === query.propertyType);
    }
    if (query.listingStatus && query.listingStatus !== 'All Status') {
      filtered = filtered.filter(p => p.listingStatus === query.listingStatus);
    }
    return { items: filtered, total: filtered.length };
  },

  findOne: async (id: string) => {
    const property = properties.find(p => p.id === id);
    if (property) {
      property.views += 1;
    }
    return property;
  },

  findFeatured: async () => {
    return properties.filter(p => p.isFeatured);
  },
};

export const userService = {
  findByEmail: async (email: string) => null,
  create: async (data: any) => ({ id: '1', ...data }),
};

export { properties, Property, User };