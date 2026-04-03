import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { users } from '../../db';

const JWT_SECRET = process.env.JWT_SECRET || 'honcho-secret-key';

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  if (!token) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const user = users.find(u => u.id === decoded.id);
    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      data: { id: user.id, email: user.email, name: user.name, phone: user.phone, role: user.role, isVerified: user.isVerified },
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
  }
}

export async function PUT(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  if (!token) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    return NextResponse.json({ success: true, data: body });
  } catch {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}
