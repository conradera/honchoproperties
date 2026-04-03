export type UserRole = 'tenant' | 'landlord' | 'agent' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  isVerified: boolean;
  createdAt: Date;
}

export type PropertyType = 'apartment' | 'house' | 'villa' | 'office' | 'warehouse' | 'land' | 'commercial';
export type ListingStatus = 'sale' | 'rent' | 'lease';
export type PropertyStatus = 'available' | 'pending' | 'sold' | 'leased';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  propertyType: PropertyType;
  listingStatus: ListingStatus;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  address: string;
  city: string;
  area: string;
  latitude?: number;
  longitude?: number;
  features: string[];
  ownerId: string;
  owner?: User;
  agentId?: string;
  agent?: User;
  isFeatured: boolean;
  isVerified: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyFilter {
  search?: string;
  city?: string;
  area?: string;
  propertyType?: PropertyType;
  listingStatus?: ListingStatus;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  sortBy?: 'price' | 'newest' | 'popular';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface Booking {
  id: string;
  propertyId: string;
  property?: Property;
  userId: string;
  user?: User;
  agentId: string;
  agent?: User;
  date: Date;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  message?: string;
  createdAt: Date;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  user?: User;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}