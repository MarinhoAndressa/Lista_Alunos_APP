import { Transform } from "class-transformer";
import { IsNotEmpty, MinLength, IsOptional, IsString } from "class-validator";

export class CreateAlunoDto {

  @IsNotEmpty({ message: 'O campo nome é obrigatório'})
  @MinLength(5, { message: 'O nome deve ter no mínimo 5 caracteres' })
  nome!: string;

  @IsOptional()
  @IsString()
  descricao!: string;

  @IsNotEmpty({ message: 'Informe a data de nascimento' })
  data_nascimento!: string;

  @IsNotEmpty({ message: 'Informe o CPF' })
  cpf_aluno!: string;

  @IsNotEmpty({ message: 'Selecione uma turma' })
  turma: number;
}