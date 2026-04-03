import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <span className="text-lg md:text-xl font-serif font-bold text-white">HONCHO</span>
                <span className="block text-xs text-secondary">Property Partners</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uganda&apos;s most trusted technology-driven real estate platform.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/properties" className="text-gray-400 hover:text-secondary transition-colors text-sm">Properties</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-secondary transition-colors text-sm">Contact</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-secondary transition-colors text-sm">List Property</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6">Property Types</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/properties?type=house" className="text-gray-400 hover:text-secondary transition-colors text-sm">Houses</Link></li>
              <li><Link href="/properties?type=apartment" className="text-gray-400 hover:text-secondary transition-colors text-sm">Apartments</Link></li>
              <li><Link href="/properties?type=villa" className="text-gray-400 hover:text-secondary transition-colors text-sm">Villas</Link></li>
              <li><Link href="/properties?type=commercial" className="text-gray-400 hover:text-secondary transition-colors text-sm">Commercial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Plot 12, Jinja Road<br />Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+256 700 123 456</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@honcho.co.ug</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} HONCHO Property Partners Limited. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-secondary">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-secondary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}