import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'honcho_db',
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  entities: ['src/database/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => console.log('📦 Database connected'))
  .catch((error) => console.error('Database connection error:', error));