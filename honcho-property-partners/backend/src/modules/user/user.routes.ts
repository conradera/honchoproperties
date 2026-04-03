import { Router, Request, Response } from 'express';
import { db } from '../../services/db';

const router = Router();

router.get('/me', (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }
  const user = db.users[0];
  res.json({ 
    success: true, 
    data: { id: user.id, email: user.email, name: user.name, phone: user.phone, role: user.role, isVerified: user.isVerified } 
  });
});

router.put('/me', (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }
  res.json({ success: true, data: req.body });
});

router.get('/:id', (req: Request, res: Response) => {
  const user = db.users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, error: 'User not found' });
  }
  res.json({ success: true, data: { id: user.id, name: user.name, role: user.role, isVerified: user.isVerified } });
});

export const userRouter = router;