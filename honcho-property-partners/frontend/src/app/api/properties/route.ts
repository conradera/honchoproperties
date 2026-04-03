import { NextRequest, NextResponse } from 'next/server';
import { properties } from '../db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const propertyType = searchParams.get('propertyType');
  const listingStatus = searchParams.get('listingStatus');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');

  let filtered = [...properties];

  if (search) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }
  if (propertyType && propertyType !== 'All Types') {
    filtered = filtered.filter(p => p.propertyType === propertyType);
  }
  if (listingStatus && listingStatus !== 'All Status') {
    filtered = filtered.filter(p => p.listingStatus === listingStatus);
  }

  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return NextResponse.json({
    success: true,
    data: {
      items,
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit),
    },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const property = {
    id: String(properties.length + 1),
    ...body,
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  properties.push(property as any);
  return NextResponse.json({ success: true, data: property }, { status: 201 });
}
