import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCarDTO, UpdateCarDTO } from './dto/car.dto';
import { Car } from './car.entity';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  async getQueryCars(@Query('color') color) {
    return this.carService.getCarByColor(color);
  }
  @Get()
  async getTodosCars(): Promise<Car[]> {
    return this.carService.getAllCars();
  }
  @Get(':id')
  async getUnCard(@Param('id') id: number): Promise<Car> {
    return this.carService.getCarById(id);
  }
  @Post()
  async crearCar(@Body() request: CreateCarDTO) {
    return this.carService.createCar(request);
  }
  @Delete(':id')
  async eliminarCar(@Param('id') id: number) {
    return this.carService.deleteCarById(id);
  }
  @Put(':id')
  async actualizarCar(@Param('id') id: number, @Body() request: UpdateCarDTO) {
    return this.carService.updateCarById(id, request);
  }
}
