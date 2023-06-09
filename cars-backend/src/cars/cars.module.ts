import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Car } from './car.entity';

import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car, User])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
