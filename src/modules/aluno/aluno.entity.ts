import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
    ManyToOne, 
    JoinColumn 
} from "typeorm";

import { Turma } from "../turma/turma.entity";

@Entity('alunos')
export class Aluno extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 120 })
    nome!: string;

    @Column({ type: 'text', nullable: true })
    descricao?: string;

    // @Column({ type: 'decimal', precision: 10, scale: 2 })
    // preco!: number;

    // Adicionando Data Nascimento e CPF
    @Column({ type: 'date' })
    data_nascimento!: Date;

    @Column({ type: 'varchar', length: 14 })
    cpf_aluno!: string;

    @Column({ type: 'boolean', default: true })
    ativo!: boolean;

    @CreateDateColumn({ name: 'criado_em' })
    criadoEm!: Date;

    @UpdateDateColumn({ name: 'atualizado_em', nullable: true })
    atualizadoEm!: Date;

    @ManyToOne(() => Turma, (turma) => turma.alunos)
    @JoinColumn({ name: 'turma_id' })
    turma!: Turma;
}