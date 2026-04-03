'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin, Phone, Mail, Calendar, Heart, Share2, Check, ArrowLeft } from 'lucide-react';
import { Property } from '@/types';

const mockProperty: Property = {
  id: '1',
  title: 'Luxury Villa in Kololo',
  description: `This stunning 5-bedroom villa offers the ultimate in luxury living in the heart of Kololo, Kampala. Featuring panoramic city views, a private infinity pool, and meticulously landscaped gardens, this property represents the pinnacle of Ugandan real estate.

The property boasts spacious living areas with high ceilings and floor-to-ceiling windows that flood the interior with natural light. The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry. Each bedroom is an en-suite with premium fixtures.

The master suite includes a private balcony overlooking the city, a walk-in closet, and a spa-like bathroom with dual vanities and a soaking tub. Additional features include a home cinema, gym, staff quarters, and secure parking for 4 vehicles.`,
  price: 2500000000,
  propertyType: 'villa',
  listingStatus: 'sale',
  status: 'available',
  bedrooms: 5,
  bathrooms: 4,
  sqft: 4500,
  images: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
  ],
  address: 'Kololo Drive, Plot 45',
  city: 'Kampala',
  area: 'Kololo',
  latitude: 0.3476,
  longitude: 32.5825,
  features: [
    'Infinity Pool', 'Garden', 'Garage', 'CCTV Security', 'Solar Power', 'Water Tank',
    'Home Cinema', 'Gym', 'Staff Quarters', 'Balcony', 'City View', 'Fully Fenced'
  ],
  ownerId: '1',
  owner: {
    id: '1',
    email: 'agent@honcho.co.ug',
    name: 'Sarah Nakato',
    phone: '+256 700 123 456',
    role: 'agent',
    isVerified: true,
    createdAt: new Date(),
  },
  agentId: '1',
  isFeatured: true,
  isVerified: true,
  views: 1250,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function PropertyDetailClient({ id }: { id: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mockProperty.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mockProperty.images.length) % mockProperty.images.length);
  };

  const property = mockProperty;

  const statusLabels: Record<string, string> = {
    sale: 'For Sale',
    rent: 'For Rent',
    lease: 'For Lease',
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-primary py-8">
        <div className="container-custom">
          <Link href="/properties" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4">
            <ArrowLeft className="w-5 h-5" />
            Back to Properties
          </Link>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src={property.images[currentImageIndex]}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-gold text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                  {statusLabels[property.listingStatus]}
                </span>
                {property.isFeatured && (
                  <span className="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${index === currentImageIndex ? 'border-gold' : 'border-transparent hover:border-gold/50'}`}
                >
                  <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary">{property.title}</h1>
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <MapPin className="w-5 h-5" />
                    <span>{property.area}, {property.city}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl font-bold text-gold">{formatPrice(property.price)}</p>
                  <p className="text-gray-500 text-sm">
                    {property.listingStatus === 'rent' ? 'per month' : property.listingStatus === 'lease' ? 'per year' : ''}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 py-6 border-t border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Bed className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{property.bedrooms}</p>
                    <p className="text-gray-500 text-sm">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Bath className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{property.bathrooms}</p>
                    <p className="text-gray-500 text-sm">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Maximize className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{property.sqft.toLocaleString()}</p>
                    <p className="text-gray-500 text-sm">Sq Ft</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Description</h3>
                <div className="prose prose-gray max-w-none">
                  {property.description.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Location</h3>
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-2" />
                    <p className="text-gray-600">{property.address}</p>
                    <p className="text-gray-500 text-sm">{property.area}, {property.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">Contact Agent</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gold">
                    {property.owner?.name?.charAt(0) || 'A'}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary">{property.owner?.name}</p>
                  <p className="text-gray-500 text-sm">Licensed Agent</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${property.owner?.phone}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gold/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  <span className="text-gray-700">{property.owner?.phone}</span>
                </a>
                <a
                  href={`mailto:${property.owner?.email}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gold/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  <span className="text-gray-700 text-sm">{property.owner?.email}</span>
                </a>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/256700123456?text=Hi, I'm interested in ${property.title} (${property.id})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full btn-outline flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Visit
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 text-gray-500 hover:text-gold transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 text-gray-500 hover:text-gold transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-serif text-lg font-semibold text-primary mb-4">Property Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Type</span>
                  <span className="font-medium text-primary capitalize">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="font-medium text-primary">{statusLabels[property.listingStatus]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Listed</span>
                  <span className="font-medium text-primary">{new Date(property.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Views</span>
                  <span className="font-medium text-primary">{property.views}</span>
                </div>
                {property.isVerified && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Verified</span>
                    <span className="font-medium text-green-600">Yes</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}