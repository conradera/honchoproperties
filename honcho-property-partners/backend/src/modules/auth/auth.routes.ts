import { Router, Request, Response } from 'express';
import { db } from '../../services/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'honcho-secret-key';

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name, phone, role } = req.body;
    
    const existing = db.users.find(u => u.email === email);
    if (existing) {
      return res.status(400).json({ success: false, error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      id: String(db.users.length + 1),
      email,
      password: hashedPassword,
      name,
      phone,
      role: role || 'tenant',
      isVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.users.push(user as any);

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      success: true,
      data: { user: { id: user.id, email: user.email, name: user.name, role: user.role }, token },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Registration failed' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = db.users.find(u => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password || ''))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      data: { user: { id: user.id, email: user.email, name: user.name, role: user.role, isVerified: user.isVerified }, token },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Login failed' });
  }
});

export const authRouter = router;