import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exercicio } from "./exercicio.entity";

@Injectable()
export class ExercicioService {

    constructor(
        @InjectRepository(Exercicio)
        private readonly exercicioRepository: Repository<Exercicio>,
    ) { }

    public findAll(): Promise<Exercicio[]> {
        return this.exercicioRepository.find();
    }

    public findById(codigo: number): Promise<Exercicio> {
        return this.exercicioRepository.findOneBy({ codigo });
    }

    public salvar(exercicio: Exercicio): Promise<Exercicio> {
        return this.exercicioRepository.save(exercicio);
    }

    public async excluir(codigo: number): Promise<void> {
        await this.exercicioRepository.delete(codigo);
    }
}