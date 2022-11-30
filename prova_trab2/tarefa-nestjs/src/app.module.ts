import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tarefaController } from './tarefa.controller';
import { Tarefa } from './tarefa.entity';
import { TarefaService } from './tarefa.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'exercicio',
      entities: [
        Tarefa // entidades/classes
      ],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Tarefa])
  ],
  controllers: [AppController, tarefaController],
  providers: [AppService, TarefaService],
})
export class AppModule {}
