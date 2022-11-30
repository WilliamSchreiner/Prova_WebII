import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tarefa'})
export class Exercicio {

    @PrimaryGeneratedColumn({name: 'codigo'})
    codigo?: number;

    @Column({name: 'nome', type: 'varchar',length: '100'})
    nome?: string;

    @Column({name: 'serie', type: 'decimal'})
    serie?: number;

    @Column({name: 'repeticao', type: 'decimal'})
    repeticao?: number;

    @Column({name: 'feito', type: 'boolean'})
    feito?: string;
}