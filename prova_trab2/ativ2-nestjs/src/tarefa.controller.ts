import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";

@Controller()
export class tarefaController {

    tarefaLista = [];

    @Get("/tarefa")
        listaTarefa(){
            return this.tarefaLista;
        }
    
    @Put("/tarefa")
    salvarTarefa(@Body() tarefa){
        let index = this.tarefaLista.findIndex(t => t.codigo == tarefa.codigo);
        if(index >= 0) {
            this.tarefaLista[index].nome = tarefa.nome;
            this.tarefaLista[index].serie = tarefa.serie;
            this.tarefaLista[index].repeticao = tarefa.repeticao;
            this.tarefaLista[index].feito = tarefa.feito;
        } else {
            tarefa.codigo = Math.random().toString(36);
            this.tarefaLista.push(tarefa);
            console.log(tarefa)
            return "ok";
        }        
    }

    @Get("/tarefa/:codigo")
    buscarPorCod(@Param() parametro){
        let tarefa = this.tarefaLista.find(tarefa => tarefa.codigo == parametro.codigo);
        console.log(tarefa)
        return tarefa;
    }

    @Delete("/tarefa/:codigo")
    excluirTarefa(@Param() parametro){
        let index = this.tarefaLista.findIndex(tarefa => tarefa.codigo == parametro.codigo);
        console.log(index);
        this.tarefaLista.splice(index, 1)
        return "excluido"
    }
}

