'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, Home, Calendar, MessageSquare, Settings, Plus, Eye, Edit, Trash2, LogOut, Bell, Users, BarChart3 } from 'lucide-react';

const tabs = [
  { id: 'properties', label: 'My Properties', icon: Home },
  { id: 'bookings', label: 'Bookings', icon: Calendar },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'stats', label: 'Statistics', icon: BarChart3 },
];

const mockProperties = [
  { id: '1', title: 'Luxury Villa in Kololo', price: 2500000000, status: 'available', views: 1250, createdAt: '2024-01-15' },
  { id: '2', title: 'Modern Apartment in Ntinda', price: 850000000, status: 'available', views: 890, createdAt: '2024-01-10' },
  { id: '3', title: 'Family Home in Naguru', price: 1650000000, status: 'pending', views: 450, createdAt: '2024-01-05' },
];

const mockBookings = [
  { id: '1', property: 'Luxury Villa in Kololo', date: '2024-02-01', time: '10:00 AM', status: 'confirmed', client: 'John Doe' },
  { id: '2', property: 'Modern Apartment in Ntinda', date: '2024-02-03', time: '2:00 PM', status: 'pending', client: 'Jane Smith' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('properties');
  const [showSidebar, setShowSidebar] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container-custom py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <span className="font-serif font-bold text-primary">HONCHO</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gold">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="font-semibold text-gold">JD</span>
              </div>
              <div className="hidden md:block">
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-gray-500">Agent</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-4 sticky top-24">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id ? 'bg-gold text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
                <hr className="my-4" />
                <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50">
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </nav>
            </div>
          </aside>

          <main className="flex-1">
            {activeTab === 'properties' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-serif text-2xl font-bold text-primary">My Properties</h1>
                  <button className="btn-gold flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add Property
                  </button>
                </div>

                <div className="bg-white rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Property</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Views</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {mockProperties.map((property) => (
                        <tr key={property.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <p className="font-medium text-primary">{property.title}</p>
                            <p className="text-sm text-gray-500">{property.createdAt}</p>
                          </td>
                          <td className="px-6 py-4 text-gold font-medium">{formatPrice(property.price)}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                              property.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {property.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{property.views}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-gold"><Eye className="w-4 h-4" /></button>
                              <button className="p-2 text-gray-500 hover:text-gold"><Edit className="w-4 h-4" /></button>
                              <button className="p-2 text-gray-500 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <h1 className="font-serif text-2xl font-bold text-primary">Bookings</h1>
                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <div key={booking.id} className="bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-primary">{booking.property}</h3>
                        <p className="text-sm text-gray-500">{booking.client} • {booking.date} at {booking.time}</p>
                      </div>
                      <span className={`inline-flex px-4 py-2 rounded-lg text-sm font-medium ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-6">
                <h1 className="font-serif text-2xl font-bold text-primary">Statistics</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                        <Home className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">3</p>
                        <p className="text-gray-500 text-sm">Total Properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Eye className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">2,590</p>
                        <p className="text-gray-500 text-sm">Total Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">12</p>
                        <p className="text-gray-500 text-sm">Total Bookings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-6">
                <h1 className="font-serif text-2xl font-bold text-primary">Messages</h1>
                <div className="bg-white rounded-xl p-12 text-center">
                  <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No messages yet</p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}