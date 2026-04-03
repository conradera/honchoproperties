'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PropertyCard } from '@/components/PropertyCard';
import { Property } from '@/types';

const mockProperties: Property[] = [
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
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Modern Apartment in Ntinda',
    description: 'Contemporary 2-bedroom apartment',
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
    description: 'Exclusive beachfront property with private dock',
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
    description: 'Prime office space in central business district',
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
    isFeatured: false,
    isVerified: true,
    views: 650,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    title: 'Family Home in Naguru',
    description: 'Spacious 4-bedroom family home',
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
    description: 'Luxurious penthouse with stunning city views',
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

export default function PropertySection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary">
              FEATURED PROPERTIES
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Verified listings across Uganda</p>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors text-sm"
          >
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockProperties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link href="/properties" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors text-sm">
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}