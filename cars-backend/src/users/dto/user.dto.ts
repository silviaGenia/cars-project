export class CreateUserDto {
  documento_identidad: string;
  primer_apellido?: string;
  segundo_apellido: string;
  nombre: string;
  edad?: number;
}

export class UpdateUserDto {
  documento_identidad?: string;
  primer_apellido?: string;
  segundo_apellido?: string;
  nombre?: string;
  edad?: number;
}
