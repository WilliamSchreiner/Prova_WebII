export interface Exercicio {
    id?: string; //xx?: '?' Elvis significa um campo opcional mas funciona apenas em string
    nome: string;
    serie?: string;
    repeticao?: string
}

export class ExercicioService {

    static list: Exercicio[ ] = [];

    static salvar(exercicio: Exercicio) {
        if(exercicio.id) {

            let  index = ExercicioService.list.findIndex(a => a.id === exercicio.id); // Retornara o vetor do Avatar da lista se ele existir
            ExercicioService.list[index].nome = exercicio.nome;
            ExercicioService.list[index].serie = exercicio.serie;
            ExercicioService.list[index].repeticao = exercicio.repeticao;
        }else{
            exercicio.id = Math.random().toString(36);
            ExercicioService.list.push(exercicio);
        }
    }

    static buscarPorId(id: string): Exercicio | undefined{
        return this.list.find(exercicio => exercicio.id === id)
    }
        
}
