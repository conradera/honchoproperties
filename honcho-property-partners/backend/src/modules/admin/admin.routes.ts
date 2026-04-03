import { Router, Request, Response } from 'express';
import { db } from '../../services/db';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'honcho-secret-key';

const adminMiddleware = (req: Request, res: Response, next: Function) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    if (decoded.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Forbidden' });
    }
    next();
  } catch {
    res.status(401).json({ success: false, error: 'Invalid token' });
  }
};

router.get('/properties', adminMiddleware, (req: Request, res: Response) => {
  const { page = 1, limit = 20 } = req.query;
  const start = (Number(page) - 1) * Number(limit);
  const items = db.properties.slice(start, start + Number(limit));
  res.json({ success: true, data: { items, total: db.properties.length, page: Number(page), limit: Number(limit) } });
});

router.put('/properties/:id/verify', adminMiddleware, (req: Request, res: Response) => {
  const property = db.properties.find(p => p.id === req.params.id);
  if (!property) return res.status(404).json({ success: false, error: 'Property not found' });
  property.isVerified = true;
  res.json({ success: true, data: property });
});

router.put('/properties/:id/feature', adminMiddleware, (req: Request, res: Response) => {
  const property = db.properties.find(p => p.id === req.params.id);
  if (!property) return res.status(404).json({ success: false, error: 'Property not found' });
  property.isFeatured = req.body.isFeatured;
  res.json({ success: true, data: property });
});

router.delete('/properties/:id', adminMiddleware, (req: Request, res: Response) => {
  const index = db.properties.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ success: false, error: 'Property not found' });
  db.properties.splice(index, 1);
  res.json({ success: true, message: 'Property deleted' });
});

router.get('/users', adminMiddleware, (req: Request, res: Response) => {
  res.json({ success: true, data: { items: db.users, total: db.users.length } });
});

router.get('/stats', adminMiddleware, (_req: Request, res: Response) => {
  res.json({ 
    success: true, 
    data: { 
      totalProperties: db.properties.length,
      totalUsers: db.users.length,
      featuredProperties: db.properties.filter(p => p.isFeatured).length,
      verifiedUsers: db.users.filter(u => u.isVerified).length,
    } 
  });
});

export const adminRouter = router;