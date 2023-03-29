export class CreateCarDto {
  nombre: string;
  modelo: string;
  color: string;
  descripcion: string;
}

export class UpdateCarDto {
  nombre?: string;
  modelo?: string;
  color?: string;
  descripcion: string;
}
