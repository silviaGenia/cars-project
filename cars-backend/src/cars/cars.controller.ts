import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dto/car.dto';
import { Car } from './car.entity';
import { CarsService } from './cars.service';
import { CreateUserDto } from 'src/users/dto/user.dto';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  listarCars(): Promise<Car[]> {
    return this.carService.getCars();
  }

  @Get(':id')
  obtenerCard(@Param('id', ParseIntPipe) id: number) {
    return this.carService.getCarById(id);
  }

  @Get()
  getQueryCars(@Query('color') color) {
    return this.carService.getCarByColor(color);
  }

  @Post()
  crearCar(@Body() newCar: CreateCarDto): Promise<Car> {
    return this.carService.createCar(newCar);
  }

  @Delete(':id')
  eliminarCar(@Param('id', ParseIntPipe) id: number) {
    return this.carService.deleteCarById(id);
  }

  @Patch(':id')
  actualizarCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() car: UpdateCarDto,
  ) {
    return this.carService.updateCarById(id, car);
  }

  @Post(':id/user')
  createUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: CreateUserDto,
  ) {
    return this.carService.createUser(id, user);
  }
}
