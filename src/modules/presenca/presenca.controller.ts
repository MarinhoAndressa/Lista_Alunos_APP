// import { Body, Controller, Get, Post, Redirect, Render, Param, HttpCode } from "@nestjs/common";
// import {PresencaService } from "./presenca.service";
// import { ValidationView, toBoolean } from 'nest-validation-view';
// import { CreatePresencaDto } from "./dtos/create-presenca.dto";
// import { UpdatePresencaDto } from "./dtos/update-presenca.dto";

// @Controller('presenca')
// export class PresencaController {

//     constructor(
//         private presencaService: PresencaService
//     ) {}

//     @Get()
//     @Render('/presenca')
//     async inicial(): Promise<object> {
//         const listaPresenca = await this.presencaService.findAll();

//         return {
//             titulo: 'Consulta de Presenca',
//             turmas: listaPresenca
//         }
//     }

//     @Get('criar')
//     @Render('presenca/formulario')
//     async formularioCriar(): Promise<object> {
//         const turmas = await this.presencaService.findAll();

//         return {
//             titulo: 'Novo presenca',
//             turmas,
//         };
//     }

//     @Post('criar')
//     @Redirect('/presenca')
//     @ValidationView('presenca/formulario', ({ request, errors }) => ({
//         presenca: {
//           ...request.body
//         },
//         errors,
//       }))
//     async formularioCriarSalvar(@Body() dados: CreatePresencaDto): Promise<void> {
//         await this.presencaService.create(dados);
//     }

//     @Get(':id/editar')
//     @Render('presenca/formulario')
//     async formEditar(@Param('id') id: number): Promise<object> {
//         const presenca = await this.presencaService.findOne(id);
//         const turmas = await this.presencaService.findAll();

//         if(!presenca) {
//             throw new Error('Presenca não encontrado!');            
//         }
        
//         return {
//             titulo: 'Edição de Presenca',
//             subtitulo: `Atualização do presenca: ${presenca.nome}`,
//             presenca,
//             turmas,
//         };
//     }

//     @Post(':id/editar')
//     @Redirect('/presenca')
//     @ValidationView('presenca/formulario', ({ request, errors }) => ({
//         presenca: {
//           id: request.params.id,
//           ...request.body
//         },
//         errors,
//       }))
//     async formEditarSalvar(@Param('id') id: number, @Body() dados: UpdatePresencaDto): Promise<void>{
//         await this.presencaService.update(id, dados);
//     }

//     @Get(':id/excluir')
//     @Render('presenca/remover')
//     async formExcluir(@Param('id') id: number): Promise<object> {
//         const presenca = await this.presencaService.findOne(id);

//         if(!presenca) {
//             throw new Error('Presenca não encontrado!');            
//         }
        
//         return {
//             titulo: 'Exclusão de Presenca',
//             subtitulo: `Exclusão de presenca: ${presenca.nome}`,
//             presenca,
//         };
//     }

//     @Post(':id/excluir')
//     @Redirect('/presenca')
//     async formExcluirSalvar(@Param('id') id: number): Promise<void>{
//         await this.presencaService.remove(id);
        
//     }

//     @Post(':id/remover')
//     @HttpCode(204)
//     async remove(@Param('id') id: number): Promise<void>{
//         await this.presencaService.remove(id);
        
//     }
// }


















