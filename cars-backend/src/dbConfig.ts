import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Car } from './cars/car.entity';
config();

export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [Car],
  synchronize: true,
});
