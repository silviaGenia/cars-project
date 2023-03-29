export class CreateCarDTO {
  nombre: string;
  modelo: string;
  color: string;
  descripcion: string;
}

export class UpdateCarDTO {
  nombre?: string;
  modelo?: string;
  color?: string;
  descripcion: string;
}
