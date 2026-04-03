import { NextRequest, NextResponse } from 'next/server';
import { properties } from '../../../db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const property = properties.find(p => p.id === params.id);
  if (!property) {
    return NextResponse.json({ success: false, error: 'Property not found' }, { status: 404 });
  }
  property.views += 1;
  return NextResponse.json({ success: true, data: property });
}
