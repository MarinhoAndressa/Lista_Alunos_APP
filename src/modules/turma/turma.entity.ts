import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
    OneToMany 
} from "typeorm";

import { Aluno } from "../aluno/aluno.entity";

@Entity('turmas')
export class Turma extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 120 })
    nome!: string;

    @Column({ type: 'boolean', default: true })
    ativo!: boolean;

    @CreateDateColumn({ name: 'criado_em' })
    criadoEm!: Date;

    @UpdateDateColumn({ name: 'atualizado_em', nullable: true })
    atualizadoEm!: Date;

    //  RELAÇÃO INVERSA COM ALUNO
    @OneToMany(() => Aluno, (aluno) => aluno.turma)
    alunos!: Aluno[];
}