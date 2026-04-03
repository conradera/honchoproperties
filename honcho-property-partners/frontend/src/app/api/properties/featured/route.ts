import { NextResponse } from 'next/server';
import { properties } from '../../db';

export async function GET() {
  const featured = properties.filter(p => p.isFeatured);
  return NextResponse.json({ success: true, data: featured });
}
