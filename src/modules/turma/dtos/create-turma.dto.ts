import { IsNotEmpty, MinLength, IsBoolean, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

export class CreateTurmaDto {

  @IsNotEmpty({ message: 'O campo nome é obrigatório' })
  @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
  nome!: string;

  @IsOptional()
  @IsBoolean({ message: 'O campo ativo deve ser verdadeiro ou falso' })
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return value;
  })
  ativo?: boolean;
}