import { Injectable } from "@nestjs/common";
import { Turma } from "./turma.entity";
import { CreateTurmaDto } from "./dtos/create-turma.dto";
import { UpdateTurmaDto } from "./dtos/update-turma.dto";

@Injectable()
export class TurmaService {     

    async findAll(): Promise<Turma[]> {
        return Turma.find(); // 🔥 sem relations por enquanto
    }

    async findOne(id: number): Promise<Turma | null> {
        return Turma.findOne({
            where: { id }
        });
    }

    async create(dados: CreateTurmaDto): Promise<Turma> {
        const turma = Turma.create({
            nome: dados.nome,
            ativo: dados.ativo ?? true
        });

        return await turma.save();
    }

    async update(id: number, dados: UpdateTurmaDto): Promise<Turma | null> {
        const turma = await this.findOne(id);

        if (!turma) {
            return null;
        }

        turma.nome = dados.nome;
        turma.ativo = dados.ativo;

        return await turma.save(); 
    }

    async remove(id: number): Promise<Turma | null> {
        const turma = await this.findOne(id);

        if (!turma) {
            return null;
        }

        await turma.remove();
        return turma;
    }
}