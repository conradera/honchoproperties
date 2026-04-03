import { NextRequest, NextResponse } from 'next/server';
import { users } from '../../db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'honcho-secret-key';

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, phone, role } = await request.json();

    const existing = users.find(u => u.email === email);
    if (existing) {
      return NextResponse.json({ success: false, error: 'Email already exists' }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const user = {
      id: String(users.length + 1),
      email,
      password: hashedPassword,
      name,
      phone,
      role: role || 'tenant',
      isVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(user as any);

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      success: true,
      data: { user: { id: user.id, email: user.email, name: user.name, role: user.role }, token },
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 });
  }
}
