import { CreateTurmaDto } from "./create-turma.dto";
import { IsBoolean, IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";
import { toBoolean } from 'nest-validation-view';

export class UpdateTurmaDto extends CreateTurmaDto {

  @IsBoolean()
  @IsNotEmpty({ message: 'O campo ativo é obrigatório'})
  @Transform(({ value }) => toBoolean(value, true))
  ativo!: boolean;

}