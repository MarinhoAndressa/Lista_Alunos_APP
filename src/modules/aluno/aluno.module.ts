import { Module } from "@nestjs/common";
import { AlunoController } from "./aluno.controller";
import { AlunoService } from "./aluno.service";
import { TurmaService } from "../turma/turma.service";

@Module({
    imports: [],
    controllers: [AlunoController],
    providers: [AlunoService, TurmaService],
})
export class AlunoModule {}