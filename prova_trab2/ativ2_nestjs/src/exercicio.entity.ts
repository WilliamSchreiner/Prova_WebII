import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'exercicio'})
export class Exercicio {

    @PrimaryGeneratedColumn({name: 'id'})
    codigo?: string;

    @Column({name: 'descricao', type: 'varchar',length: '150'})
    nome?: string;
    @Column({name: 'descricao', type: 'int'})
    serie?: number;
    @Column({name: 'descricao', type: 'int'})
    repeticao?: number;
}