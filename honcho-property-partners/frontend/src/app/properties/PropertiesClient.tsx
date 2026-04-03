'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown, Grid, List } from 'lucide-react';
import { PropertyCard } from '@/components/PropertyCard';
import { Property, PropertyFilter } from '@/types';

const mockProperties: Property[] = [
  {
    id: '1', title: 'Luxury Villa in Kololo', description: 'Stunning 5-bedroom villa with panoramic views',
    price: 2500000000, propertyType: 'villa', listingStatus: 'sale', status: 'available',
    bedrooms: 5, bathrooms: 4, sqft: 4500,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
    address: 'Kololo Drive', city: 'Kampala', area: 'Kololo',
    features: ['Pool', 'Garden', 'Garage'], ownerId: '1', isFeatured: true, isVerified: true, views: 1250,
    createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: '2', title: 'Modern Apartment in Ntinda', description: 'Contemporary 2-bedroom apartment',
    price: 850000000, propertyType: 'apartment', listingStatus: 'rent', status: 'available',
    bedrooms: 2, bathrooms: 2, sqft: 1200,
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    address: 'Ntinda Road', city: 'Kampala', area: 'Ntinda',
    features: ['Balcony', 'Gym', 'Security'], ownerId: '2', isFeatured: true, isVerified: true, views: 890,
    createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: '3', title: 'Beachfront Villa in Entebbe', description: 'Exclusive beachfront property with private dock',
    price: 4500000000, propertyType: 'villa', listingStatus: 'sale', status: 'available',
    bedrooms: 6, bathrooms: 5, sqft: 6000,
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
    address: 'Lakeside Drive', city: 'Entebbe', area: 'Lakeside',
    features: ['Beach Access', 'Dock', 'Pool'], ownerId: '3', isFeatured: true, isVerified: true, views: 2100,
    createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: '4', title: 'Commercial Space in Kampala CBD', description: 'Prime office space in central business district',
    price: 1800000000, propertyType: 'commercial', listingStatus: 'lease', status: 'available',
    bedrooms: 0, bathrooms: 2, sqft: 2500,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
    address: 'Industrial Area', city: 'Kampala', area: 'CBD',
    features: ['Parking', '24/7 Access'], ownerId: '4', isFeatured: true, isVerified: true, views: 650,
    createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: '5', title: 'Family Home in Naguru', description: 'Spacious 4-bedroom family home',
    price: 1650000000, propertyType: 'house', listingStatus: 'sale', status: 'available',
    bedrooms: 4, bathrooms: 3, sqft: 2800,
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
    address: 'Naguru Hill', city: 'Kampala', area: 'Naguru',
    features: ['Garden', 'Garage', 'Security'], ownerId: '5', isFeatured: false, isVerified: true, views: 780,
    createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: '6', title: 'Penthouse in Muyenga', description: 'Luxurious penthouse with stunning city views',
    price: 3200000000, propertyType: 'apartment', listingStatus: 'sale', status: 'available',
    bedrooms: 3, bathrooms: 3, sqft: 3200,
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    address: 'Muyenga Heights', city: 'Kampala', area: 'Muyenga',
    features: ['Rooftop', 'Concierge', 'Gym'], ownerId: '6', isFeatured: true, isVerified: true, views: 1500,
    createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: '7', title: 'Riverside House in Jinja', description: 'Beautiful house with river views',
    price: 950000000, propertyType: 'house', listingStatus: 'sale', status: 'available',
    bedrooms: 4, bathrooms: 3, sqft: 2200,
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
    address: 'River Road', city: 'Jinja', area: 'Central',
    features: ['River View', 'Garden', 'Parking'], ownerId: '7', isFeatured: false, isVerified: true, views: 560,
    createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: '8', title: 'Studio Apartment in Bugolobi', description: 'Modern studio in prime location',
    price: 450000000, propertyType: 'apartment', listingStatus: 'rent', status: 'available',
    bedrooms: 1, bathrooms: 1, sqft: 650,
    images: ['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800'],
    address: 'Bugolobi Road', city: 'Kampala', area: 'Bugolobi',
    features: ['Security', 'Parking'], ownerId: '8', isFeatured: false, isVerified: true, views: 320,
    createdAt: new Date(), updatedAt: new Date(),
  },
];

const propertyTypes = ['All Types', 'house', 'apartment', 'villa', 'office', 'commercial'];
const statuses = ['All Status', 'sale', 'rent', 'lease'];
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
];

export default function PropertiesClient() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    search: '',
    type: 'All Types',
    status: 'All Status',
    area: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    sort: 'newest',
  });

  const filteredProperties = mockProperties.filter((p) => {
    if (filters.search && !p.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.type !== 'All Types' && p.propertyType !== filters.type) return false;
    if (filters.status !== 'All Status' && p.listingStatus !== filters.status) return false;
    if (filters.area && p.area.toLowerCase() !== filters.area.toLowerCase()) return false;
    if (filters.bedrooms && p.bedrooms < parseInt(filters.bedrooms)) return false;
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl font-bold text-white mb-4">Our Properties</h1>
          <p className="text-white/60">Discover your perfect property across Uganda</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="bg-white rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-outline flex items-center gap-2"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
          <div className="flex items-center gap-2 border-l pl-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gold text-primary' : 'text-gray-400 hover:text-primary'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gold text-primary' : 'text-gray-400 hover:text-primary'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-white rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
              >
                {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
              >
                {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Min Bedrooms</label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={filters.sort}
                onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gold"
              >
                {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">Showing <span className="font-semibold">{filteredProperties.length}</span> properties</p>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No properties found matching your criteria</p>
            <button
              onClick={() => setFilters({ search: '', type: 'All Types', status: 'All Status', area: '', minPrice: '', maxPrice: '', bedrooms: '', sort: 'newest' })}
              className="btn-gold mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}