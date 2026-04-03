'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Maximize, MapPin, Heart, Share2 } from 'lucide-react';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      sale: 'For Sale',
      rent: 'For Rent',
      lease: 'For Lease',
    };
    return labels[status] || status;
  };

  return (
    <Link href={`/properties/${property.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images?.[0] || '/placeholder-property.jpg'}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1">
              {getStatusLabel(property.listingStatus)}
            </span>
            {property.isFeatured && (
              <span className="bg-secondary text-white text-xs font-semibold px-3 py-1">
                Featured
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-primary font-semibold text-lg mb-1">
            {formatPrice(property.price)}
            <span className="text-gray-400 text-sm font-normal ml-1">
              {property.listingStatus === 'rent' ? '/month' : property.listingStatus === 'lease' ? '/year' : ''}
            </span>
          </p>

          <h3 className="font-serif text-lg font-medium text-primary group-hover:text-gray-600 transition-colors line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 text-sm mt-1 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span className="line-clamp-1">{property.area}, {property.city}</span>
          </div>

          <div className="flex items-center gap-4 text-gray-500 text-sm border-t pt-3">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} BD</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} BA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize className="w-4 h-4" />
              <span>{property.sqft.toLocaleString()} Sq.Ft.</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}