import { Body, Controller, Get, Post, Redirect, Render, Param, HttpCode } from "@nestjs/common";
import { TurmaService } from "./turma.service";
import { ValidationView, toBoolean } from 'nest-validation-view';
import { CreateTurmaDto } from "./dtos/create-turma.dto";
import { UpdateTurmaDto } from "./dtos/update-turma.dto";

@Controller('turmas')
export class TurmaController {

    constructor(
        private turmaService: TurmaService
    ) {}

    @Get()
    @Render('turma/inicial')
    async inicial(): Promise<object> {
        const listaTurmas = await this.turmaService.findAll();

        return {
            titulo: 'Consulta de Turmas',
            turmas: listaTurmas
        }
    }

    @Get('criar')
    @Render('turma/formulario')
    async formularioCriar(): Promise<object> {
        const turmas = await this.turmaService.findAll();

        return {
            titulo: 'Novo turma',
            turmas,
        };
    }

    @Post('criar')
    @Redirect('/turmas')
    @ValidationView('turma/formulario', ({ request, errors }) => ({
        turma: {
          ...request.body
        },
        errors,
      }))
    async formularioCriarSalvar(@Body() dados: CreateTurmaDto): Promise<void> {
        await this.turmaService.create(dados);
    }

    @Get(':id/editar')
    @Render('turma/formulario')
    async formEditar(@Param('id') id: number): Promise<object> {
        const turma = await this.turmaService.findOne(id);
        const turmas = await this.turmaService.findAll();

        if(!turma) {
            throw new Error('Turma não encontrado!');            
        }
        
        return {
            titulo: 'Edição de Turma',
            subtitulo: `Atualização do turma: ${turma.nome}`,
            turma,
            turmas,
        };
    }

    @Post(':id/editar')
    @Redirect('/turmas')
    @ValidationView('turma/formulario', ({ request, errors }) => ({
        turma: {
          id: request.params.id,
          ...request.body
        },
        errors,
      }))
    async formEditarSalvar(@Param('id') id: number, @Body() dados: UpdateTurmaDto): Promise<void>{
        await this.turmaService.update(id, dados);
    }

    @Get(':id/excluir')
    @Render('turma/remover')
    async formExcluir(@Param('id') id: number): Promise<object> {
        const turma = await this.turmaService.findOne(id);

        if(!turma) {
            throw new Error('Turma não encontrado!');            
        }
        
        return {
            titulo: 'Exclusão de Turma',
            subtitulo: `Exclusão de turma: ${turma.nome}`,
            turma,
        };
    }

    @Post(':id/excluir')
    @Redirect('/turmas')
    async formExcluirSalvar(@Param('id') id: number): Promise<void>{
        await this.turmaService.remove(id);
        
    }

    @Post(':id/remover')
    @HttpCode(204)
    async remove(@Param('id') id: number): Promise<void>{
        await this.turmaService.remove(id);
        
    }
}


















