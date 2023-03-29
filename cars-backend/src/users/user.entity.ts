import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Car } from '../cars/car.entity';

@Entity({ name: 'users' })
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  primer_apellido: string;

  @Column({ default: '' })
  segundo_apellido: string;

  @Column({ nullable: true })
  edad: number;

  @Column({ default: '' })
  documento_identidad: string;

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;
}
