'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-5 md:p-6 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-2xl md:text-3xl font-bold text-primary">10K+</span>
            </div>
            <h3 className="font-semibold text-primary mb-1 md:mb-2 text-sm md:text-base">Properties Listed</h3>
            <p className="text-gray-600 text-xs md:text-sm">Verified listings across Uganda</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 md:p-6 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-2xl md:text-3xl font-bold text-secondary">5K+</span>
            </div>
            <h3 className="font-semibold text-primary mb-1 md:mb-2 text-sm md:text-base">Happy Clients</h3>
            <p className="text-gray-600 text-xs md:text-sm">Tenants & homeowners served</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 md:p-6 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-2xl md:text-3xl font-bold text-primary">500+</span>
            </div>
            <h3 className="font-semibold text-primary mb-1 md:mb-2 text-sm md:text-base">Landlords</h3>
            <p className="text-gray-600 text-xs md:text-sm">Trusted property partners</p>
          </div>
        </div>

        <div className="mt-10 md:mt-16 bg-primary rounded-lg p-6 md:p-10 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base px-4">
            Join thousands of happy clients who found their perfect home through HONCHO Property Partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link 
              href="/properties" 
              className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition-colors text-sm"
            >
              Browse Properties
            </Link>
            <Link 
              href="/contact" 
              className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}