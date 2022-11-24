
import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { ExercicioService } from "./exercicio.service";
import { Exercicio } from "./exercicio.entity";

@Controller()
export class exercicioController {

    constructor(
        private exercicioService: ExercicioService
    ) {}

    @Get("/exercicio")
       async listaExercicio(): Promise<Exercicio[]> {
            return await this.exercicioService.findAll();
        }
    
    @Put("/exercicio")
    async salvarExercicio(@Body() exercicio) {
//@Body é relacionado ao escorpo do site.
        await this.exercicioService.salvar(exercicio);
            return "ok";
               
    }

    @Get("/exercicio/cadastro/:id")
    async buscarPorCodigo(@Param() parametro): Promise<Exercicio> {
        // @param é o objeto como algum parametro, por meio disso pode requisitar informaçoes no final da URL.  Ex: localhost:3100/tarefa/12  12=codigo
        console.log(parametro.id); //pega o :codigo da url
        return await this.exercicioService.findById(parametro.id);
    }

    @Delete("/exercicio/:id")
    async excluirExercicio(@Param() parametro){

        await this.exercicioService.excluir(parametro.id);

        return "excluido"
    }
}