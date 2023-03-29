import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
