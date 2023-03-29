import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  public async getAllCars(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  public async getCarById(id: number): Promise<Car> {
    const car = this.carsRepository.findOneBy({ id });
    if (!car) throw new Error('Car no encontrado');
    return car;
  }

  public async deleteCarById(id: number): Promise<void> {
    await this.carsRepository.delete(id);
  }

  public async createCar(car: Partial<Car>): Promise<Car> {
    return this.carsRepository.save(car);
  }

  public async updateCarById(id: number, car: Partial<Car>) {
    const myCar = await this.getCarById(id);
    if (!myCar) throw new Error('Car no encontrado');
    myCar.nombre = car.nombre;
    myCar.modelo = car.modelo;
    myCar.color = car.color;
    myCar.descripcion = car.descripcion;

    return this.carsRepository.save(myCar);
  }

  public async getCarByColor(color: string): Promise<Car[]> {
    const cars = this.carsRepository.find({ where: { color } });
    return cars;
  }
}
