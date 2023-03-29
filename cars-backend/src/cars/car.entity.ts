import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'cars' })
export class Car {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  modelo: string;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  descripcion: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
