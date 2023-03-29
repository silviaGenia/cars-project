import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { Repository } from 'typeorm';
import { CreateCarDto, UpdateCarDto } from './dto/car.dto';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getCars() {
    return this.carRepository.find();
  }

  async getCarById(id: number) {
    const carFound = await this.carRepository.findOne({
      where: { id },
    });
    if (!carFound)
      return new HttpException('¡Car no encontrado!', HttpStatus.NOT_FOUND);

    return carFound;
  }

  createCar(car: CreateCarDto) {
    // Obtenemos un esquema de la entidad Car
    const newCar = this.carRepository.create(car);

    // Guardamos un registro en Car
    return this.carRepository.save(newCar);
  }

  async deleteCarById(id: number) {
    const result = await this.carRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('¡Car no encontrado!', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async updateCarById(id: number, car: UpdateCarDto) {
    const carFound = await this.carRepository.findOne({
      where: { id },
    });
    if (!carFound)
      return new HttpException('¡Car no encontrado!', HttpStatus.NOT_FOUND);

    const updateCar = Object.assign(carFound, car);

    return this.carRepository.save(updateCar);
  }

  getCarByColor(color: string) {
    const cars = this.carRepository.find({ where: { color } });
    return cars;
  }

  async createUser(carId: number, user: CreateUserDto) {
    const carFound = await this.carRepository.findOne({
      where: {
        id: carId,
      },
    });

    if (!carFound)
      return new HttpException('¡Car no encontrado!', HttpStatus.NOT_FOUND);

    const newUser = this.userRepository.create(user);
    const saveUser = await this.userRepository.save(newUser);
    carFound.user = saveUser;

    return this.carRepository.save(carFound);
  }
}
