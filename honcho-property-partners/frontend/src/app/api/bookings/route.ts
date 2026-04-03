import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { bookings } from '../../db';

const JWT_SECRET = process.env.JWT_SECRET || 'honcho-secret-key';

function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ success: true, data: bookings });
}

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const booking = {
    id: String(bookings.length + 1),
    ...body,
    status: 'pending',
    createdAt: new Date(),
  };
  bookings.push(booking as any);
  return NextResponse.json({ success: true, data: booking }, { status: 201 });
}
