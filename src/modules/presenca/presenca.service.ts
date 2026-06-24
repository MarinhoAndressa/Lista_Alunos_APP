// import { Injectable } from "@nestjs/common";
// import { Presenca } from "./presenca.entity";
// import { CreatePresencaDto } from "./dtos/create-presenca.dto";
// import { UpdatePresencaDto } from "./dtos/update-presenca.dto";

// @Injectable()
// export class PresencaService {     

//     async findAll(): Promise<Presenca[]> {
//         return Presenca.find();
//     }

//     async findOne(id: number): Promise<Presenca | null> {
//         return Presenca.findOne({
//             where: { id }
//         });
//     }

//     async create(dados: CreatePresencaDto): Promise<Presenca> {
//         const presenca = Presenca.create({
//             nome: dados.nome,
//             ativo: dados.ativo ?? true
//         });

//         return await presenca.save();
//     }

//     async update(id: number, dados: UpdatePresencaDto): Promise<Presenca | null> {
//         const presenca = await this.findOne(id);

//         if (!presenca) {
//             return null;
//         }

//         presenca.nome = dados.nome;
//         presenca.ativo = dados.ativo;

//         return await presenca.save(); 
//     }

//     async remove(id: number): Promise<Presenca | null> {
//         const presenca = await this.findOne(id);

//         if (!presenca) {
//             return null;
//         }

//         await presenca.remove();
//         return presenca;
//     }
// }