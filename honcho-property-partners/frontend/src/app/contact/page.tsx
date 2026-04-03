'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-primary">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold text-center">
            CONTACT US
          </h1>
          <p className="text-white/70 text-center mt-4 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries about properties or our services
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Visit Us</h4>
              <p className="text-gray-600 text-sm">
                Plot 12, Jinja Road<br />
                Kampala, Uganda
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm">
                +256 700 123 456<br />
                +256 702 234 567
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Email Us</h4>
              <p className="text-gray-600 text-sm">
                info@honcho.co.ug<br />
                support@honcho.co.ug
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Office Hours</h4>
              <p className="text-gray-600 text-sm">
                Mon - Fri: 8AM - 6PM<br />
                Sat: 9AM - 2PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="+256 700 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="property inquiry">Property Inquiry</option>
                      <option value="list property">List a Property</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Quick Contact Options
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+256700123456"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-soft transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Call Us Directly</p>
                      <p className="text-sm text-gray-600">+256 700 123 456</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/256700123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-soft transition-shadow"
                  >
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">WhatsApp</p>
                      <p className="text-sm text-gray-600">Chat with us</p>
                    </div>
                  </a>

                  <Link
                    href="/properties"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-soft transition-shadow"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Browse Properties</p>
                      <p className="text-sm text-gray-600">Find your dream home</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">
                  List Your Property
                </h3>
                <p className="text-white/80 mb-6">
                  Have a property to rent or sell? Join our network of landlords and agents.
                </p>
                <Link
                  href="/register"
                  className="inline-block px-6 py-3 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition-colors"
                >
                  Register as Landlord
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Kampala', 'Entebbe', 'Jinja', 'Mbarara', 'Gulu', 'Lira', 'Masaka', 'Arua'].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg overflow-hidden shadow-soft">
            <div className="aspect-[21/9] bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Map View</p>
                <p className="text-sm text-gray-400">Plot 12, Jinja Road, Kampala</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}