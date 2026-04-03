'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, MapPin, Phone, Mail, Users, Home, Building, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center">
            ABOUT HONCHO
          </h1>
          <p className="text-white/70 text-center mt-4 max-w-2xl mx-auto">
            Uganda's most trusted and technologically advanced real estate ecosystem
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                  alt="HONCHO Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold">10K+</p>
                <p className="text-sm">Properties Listed</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                HONCHO Property Partners Limited
              </h2>
              <p className="text-secondary font-medium mb-6">
                Technology-Driven Real Estate Platform & Brokerage Firm
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Location</p>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Industry</p>
                    <p className="text-gray-600">Real Estate & Property Technology (PropTech)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Company Type</p>
                    <p className="text-gray-600">Private Limited Company</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                HONCHO Property Partners is a technology-driven real estate platform and brokerage firm 
                focused on verified property access, smart discovery, and seamless transactions in Uganda.
                We operate as a hybrid model combining marketplace, brokerage, property management, and PropTech.
              </p>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium hover:bg-secondary transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Uganda's most trusted and technologically advanced real estate ecosystem, 
                simplifying property access through verified listings, smart technology, and transparent transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To simplify property access through verified listings, smart technology, and seamless 
                transactions, creating a trustworthy real estate experience for all Ugandans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Model */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Our Business Model
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            HONCHO operates as a hybrid platform combining four key services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-soft transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Marketplace Platform</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Property listings (rent, sale)</li>
                <li>• Multi-agent onboarding</li>
                <li>• Verified listings</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-soft transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Brokerage Services</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Property sourcing</li>
                <li>• Deal negotiation</li>
                <li>• Tenant placement</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-soft transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Property Management</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Rent collection</li>
                <li>• Maintenance</li>
                <li>• Tenant handling</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-soft transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">PropTech Layer</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI-powered search</li>
                <li>• Map-based discovery</li>
                <li>• Digital transactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose HONCHO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Verified Listings</h4>
              <p className="text-white/70 text-sm">Every property is verified for authenticity and accuracy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Trusted Platform</h4>
              <p className="text-white/70 text-sm">Secure transactions and transparent processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Wide Selection</h4>
              <p className="text-white/70 text-sm">Houses, apartments, commercial spaces, and land</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Location-Based Search</h4>
              <p className="text-white/70 text-sm">Find properties exactly where you need them</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Instant Communication</h4>
              <p className="text-white/70 text-sm">Call & WhatsApp integration for quick responses</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Professional Agents</h4>
              <p className="text-white/70 text-sm">Dedicated support from experienced professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy clients who found their perfect home through HONCHO Property Partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/properties" 
              className="px-8 py-3 bg-primary text-white font-semibold hover:bg-secondary transition-colors"
            >
              Browse Properties
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}