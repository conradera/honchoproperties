import { Router, Request, Response } from 'express';
import { db } from '../../services/db';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { search, propertyType, listingStatus, page = 1, limit = 12 } = req.query;
  
  let filtered = [...db.properties];
  
  if (search) {
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(String(search).toLowerCase())
    );
  }
  if (propertyType && propertyType !== 'All Types') {
    filtered = filtered.filter(p => p.propertyType === propertyType);
  }
  if (listingStatus && listingStatus !== 'All Status') {
    filtered = filtered.filter(p => p.listingStatus === listingStatus);
  }

  const start = (Number(page) - 1) * Number(limit);
  const items = filtered.slice(start, start + Number(limit));

  res.json({
    success: true,
    data: {
      items,
      total: filtered.length,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(filtered.length / Number(limit)),
    },
  });
});

router.get('/featured', (_req: Request, res: Response) => {
  const featured = db.properties.filter(p => p.isFeatured);
  res.json({ success: true, data: featured });
});

router.get('/areas', (_req: Request, res: Response) => {
  const areas = [...new Set(db.properties.map(p => p.area))];
  res.json({ success: true, data: areas });
});

router.get('/:id', (req: Request, res: Response) => {
  const property = db.properties.find(p => p.id === req.params.id);
  if (!property) {
    return res.status(404).json({ success: false, error: 'Property not found' });
  }
  property.views += 1;
  res.json({ success: true, data: property });
});

router.post('/', (req: Request, res: Response) => {
  const property = {
    id: String(db.properties.length + 1),
    ...req.body,
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  db.properties.push(property as any);
  res.status(201).json({ success: true, data: property });
});

export const propertyRouter = router;