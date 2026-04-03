'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
                alt="About HONCHO Property Partners"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-primary px-3 md:px-4 py-1 md:py-2">
              <p className="font-serif text-xs font-bold tracking-wider text-white">ABOUT</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              HONCHO PROPERTY PARTNERS LIMITED
            </h2>
            <p className="text-secondary font-medium mb-4 md:mb-6 text-sm md:text-base">
              Technology-Driven Real Estate Platform & Brokerage Firm
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
              HONCHO Property Partners is a technology-driven real estate platform and brokerage firm 
              focused on verified property access, smart discovery, and seamless transactions in Uganda. 
              Headquartered in Kampala, we operate as a hybrid model combining marketplace, brokerage, 
              property management, and PropTech.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Our vision is to become Uganda&apos;s most trusted and technologically advanced real estate ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="bg-primary/5 p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-1 md:mb-2 text-sm">Marketplace</h4>
                <p className="text-xs text-gray-600">Property listings for rent, sale & onboarding</p>
              </div>
              <div className="bg-primary/5 p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-1 md:mb-2 text-sm">PropTech</h4>
                <p className="text-xs text-gray-600">AI search, map discovery & digital transactions</p>
              </div>
              <div className="bg-primary/5 p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-1 md:mb-2 text-sm">Brokerage</h4>
                <p className="text-xs text-gray-600">Property sourcing & deal negotiation</p>
              </div>
              <div className="bg-primary/5 p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-1 md:mb-2 text-sm">Management</h4>
                <p className="text-xs text-gray-600">Rent collection & tenant handling</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-primary text-white text-sm font-semibold hover:bg-secondary transition-colors"
            >
              CONTACT AN AGENT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}