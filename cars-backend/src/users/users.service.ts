// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Car } from 'src/cars/car.entity';
// import { Repository } from 'typeorm';
// import { CreateUserDto } from './dto/user.dto';
// import { User } from './user.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,

//     @InjectRepository(Car)
//     private carRepository: Repository<Car>,
//   ) {}

//   async createUser(carId: number, user: CreateUserDto) {
//     const carFound = await this.carRepository.findOne({
//       where: {
//         id: carId,
//       },
//     });

//     if (!carFound)
//       return new HttpException('¡Car no encontrado!', HttpStatus.NOT_FOUND);

//     const newUser = this.userRepository.create(user);
//     const saveUser = await this.userRepository.save(newUser);
//     carFound.user = saveUser;

//     return this.carRepository.save(carFound);
//   }
// }
