import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { dbConfig } from './dbConfig';
import { UsersModule } from './users/users.module';

@Module({
  imports: [dbConfig, CarsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
