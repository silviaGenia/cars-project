import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { dbConfig } from './dbConfig';

@Module({
  imports: [dbConfig, CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
