// import { CreatePresencaDto } from "./create-presenca.dto";
// import { IsBoolean, IsNotEmpty } from "class-validator";
// import { Transform } from "class-transformer";
// import { toBoolean } from 'nest-validation-view';

// export class UpdateTurmaDto extends CreatePresencaDto {

//   @IsBoolean()
//   @IsNotEmpty({ message: 'O campo ativo é obrigatório'})
//   @Transform(({ value }) => toBoolean(value, true))
//   ativo!: boolean;

// }