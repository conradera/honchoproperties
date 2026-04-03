import { Router, Request, Response } from 'express';
import { db } from '../../services/db';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }
  
  const booking = {
    id: String(db.bookings.length + 1),
    ...req.body,
    status: 'pending',
    createdAt: new Date(),
  };
  db.bookings.push(booking as any);
  res.status(201).json({ success: true, data: booking });
});

router.get('/', (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }
  res.json({ success: true, data: db.bookings });
});

router.put('/:id', (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }
  
  const booking = db.bookings.find(b => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ success: false, error: 'Booking not found' });
  }
  Object.assign(booking, req.body);
  res.json({ success: true, data: booking });
});

export const bookingRouter = router;