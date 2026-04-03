'use client';

import Image from 'next/image';
import Link from 'next/link';

const areas = [
  {
    name: 'KAMPALA',
    image: 'https://images.unsplash.com/photo-1590092306122-4094c03d8c1c?w=800',
    link: '/properties?area=kampala',
  },
  {
    name: 'ENTEBBE',
    image: 'https://images.unsplash.com/photo-1559693072-3be52a6b8b99?w=800',
    link: '/properties?area=entebbe',
  },
  {
    name: 'JINJA',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    link: '/properties?area=jinja',
  },
  {
    name: 'MBARARA',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    link: '/properties?area=mbarara',
  },
];

export default function AreasSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          POPULAR LOCATIONS
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={area.link}
              className="group relative aspect-[3/4] md:aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <span className="text-white text-sm md:text-lg font-bold tracking-wider">{area.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}