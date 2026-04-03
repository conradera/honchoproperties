# HONCHO Property Partners

Uganda's premier real estate platform. A production-ready, mobile-first real estate platform built with modern technologies.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone and Install Dependencies**
```bash
cd honcho-property-partners
npm install
```

2. **Setup Environment Variables**
```bash
cp .env.example .env
# Edit .env with your database credentials
```

3. **Start Backend**
```bash
cd backend
npm run start:dev
# API runs on http://localhost:3001
```

4. **Start Frontend** (in new terminal)
```bash
cd frontend
npm run dev
# App runs on http://localhost:3000
```

## 📁 Project Structure

```
honcho-property-partners/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/            # App router pages
│   │   │   ├── page.tsx           # Landing page
│   │   │   ├── properties/       # Properties listing
│   │   │   ├── dashboard/        # User dashboard
│   │   │   └── auth/             # Login/Register
│   │   ├── components/          # React components
│   │   ├── types/               # TypeScript types
│   │   └── styles/              # Global styles
│   └── package.json
│
├── backend/                  # Node.js API
│   ├── src/
│   │   ├── database/           # TypeORM entities
│   │   │   ├── entities/       # User, Property, Booking
│   │   │   └── index.ts        # Database config
│   │   ├── modules/            # API modules
│   │   │   ├── auth/           # Authentication
│   │   │   ├── property/       # Property CRUD
│   │   │   ├── user/           # User management
│   │   │   ├── booking/        # Visit bookings
│   │   │   └── admin/          # Admin functions
│   │   └── main.ts             # Express server
│   └── package.json
│
├── package.json              # Root workspace config
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: `#1a1a1a` (Dark)
- **Gold**: `#D4AF37` (Accent)
- **Accent**: `#C9A227`

### Components
- Mobile-first responsive design
- Soft shadows and rounded cards
- Smooth animations

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero, featured properties, areas |
| Properties | `/properties` | Search & filter listings |
| Property Detail | `/properties/[id]` | Full property info, contact |
| Login | `/login` | User authentication |
| Register | `/register` | New user signup |
| Dashboard | `/dashboard` | User/Agent dashboard |

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Sign in

### Properties
- `GET /api/properties` - List with filters
- `GET /api/properties/featured` - Featured listings
- `GET /api/properties/:id` - Property details
- `POST /api/properties` - Create listing (auth)

### Bookings
- `GET /api/bookings` - User's bookings
- `POST /api/bookings` - Schedule visit
- `PUT /api/bookings/:id` - Update status

### Admin
- `GET /api/admin/properties` - All properties
- `PUT /api/admin/properties/:id/verify` - Verify listing
- `GET /api/admin/stats` - Platform stats

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, TypeScript
- **Backend**: Express, TypeORM, PostgreSQL
- **Auth**: JWT tokens
- **Images**: Cloud storage ready (S3 compatible)

## 📦 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
```

### Backend (Render/DigitalOcean)
```bash
cd backend
npm run build
npm start
```

## 🔐 Security

- JWT authentication
- Rate limiting
- Input validation
- CORS configured
- Password hashing with bcrypt

## 📄 License

MIT License - HONCHO Property Partners 2024