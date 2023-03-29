import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
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
}
