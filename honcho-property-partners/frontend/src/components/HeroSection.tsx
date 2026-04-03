'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';

const propertyTypes = ['All Types', 'House', 'Apartment', 'Villa', 'Office', 'Commercial', 'Land'];
const statuses = ['All Status', 'For Sale', 'For Rent', 'For Lease'];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('All Types');
  const [status, setStatus] = useState('All Status');

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
          alt="Property in Uganda"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 container-custom py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-3 leading-tight tracking-tight drop-shadow-lg">
            <span className="block">UGANDA&apos;S TRUSTED</span>
          </h1>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
            REAL ESTATE PLATFORM
          </h2>
          
          <p className="text-white/80 text-sm md:text-lg mb-8 max-w-2xl mx-auto px-4">
            Verified properties, smart search, and seamless transactions — all in one platform
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 mb-8 px-4">
            <span className="text-white/70 text-xs md:text-sm font-light tracking-wider">VERIFIED LISTINGS</span>
            <span className="w-1 h-1 bg-secondary rounded-full hidden sm:block"></span>
            <span className="text-white/70 text-xs md:text-sm font-light tracking-wider">SMART SEARCH</span>
            <span className="w-1 h-1 bg-secondary rounded-full hidden sm:block"></span>
            <span className="text-white/70 text-xs md:text-sm font-light tracking-wider">DIGITAL TRANSACTIONS</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 px-4">
            <Link href="/properties?status=sale" className="px-3 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/20 transition-colors border border-white/20">
              HOUSES
            </Link>
            <Link href="/properties?status=rent" className="px-3 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/20 transition-colors border border-white/20">
              APARTMENTS
            </Link>
            <Link href="/properties?type=commercial" className="px-3 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/20 transition-colors border border-white/20">
              COMMERCIAL
            </Link>
            <Link href="/properties?type=land" className="px-3 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/20 transition-colors border border-white/20">
              LAND
            </Link>
          </div>

          <div className="bg-white rounded-lg p-3 md:p-5 shadow-2xl max-w-4xl mx-auto mx-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="sm:col-span-2 relative">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary text-sm"
                />
              </div>

              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-primary appearance-none cursor-pointer text-sm"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 pointer-events-none" />
              </div>

              <Link
                href={`/properties?search=${searchQuery}&type=${propertyType}&status=${status}`}
                className="bg-primary text-white px-4 md:px-6 py-2.5 md:py-3 rounded font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
              </Link>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-8 text-white/60 text-xs md:text-sm px-4">
            <span className="whitespace-nowrap">Popular:</span>
            <Link href="/properties?area=kampala" className="underline hover:text-white">Kampala</Link>
            <Link href="/properties?area=entebbe" className="underline hover:text-white">Entebbe</Link>
            <Link href="/properties?area=jinja" className="underline hover:text-white">Jinja</Link>
            <Link href="/properties?area=mbarara" className="hidden sm:inline underline hover:text-white">Mbarara</Link>
          </div>
        </div>
      </div>
    </section>
  );
}