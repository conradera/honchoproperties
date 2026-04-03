import { NextResponse } from 'next/server';
import { properties } from '../../db';

export async function GET() {
  const areas = Array.from(new Set(properties.map(p => p.area)));
  return NextResponse.json({ success: true, data: areas });
}
