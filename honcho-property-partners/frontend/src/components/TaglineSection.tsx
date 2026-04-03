'use client';

import Link from 'next/link';

export default function TaglineSection() {
  const tags = [
    { word: 'Verified', category: 'Properties' },
    { word: 'Smart', category: 'Search' },
    { word: 'Trusted', category: 'Platform' },
    { word: 'Digital', category: 'Transactions' },
    { word: 'PropTech', category: 'Leader' },
    { word: '10K+', category: 'Listings' },
  ];

  return (
    <section className="py-8 md:py-12 bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {tags.map((tag, index) => (
            <div key={index} className="text-center">
              <p className="text-sm md:text-base font-bold text-secondary mb-1">{tag.word}</p>
              <p className="text-white/60 text-xs md:text-sm tracking-wider">{tag.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-8 gap-y-2 text-white/80 text-xs md:text-sm">
              <span>Property Experts in Uganda</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/properties" 
                className="px-4 md:px-6 py-2 border border-white text-white text-xs md:text-sm font-medium hover:bg-secondary transition-colors"
              >
                Browse Properties
              </Link>
              <Link 
                href="/contact" 
                className="px-4 md:px-6 py-2 bg-secondary text-white text-xs md:text-sm font-semibold hover:bg-accent transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}