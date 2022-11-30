import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tarefaController } from './tarefa.controller';

import { Tarefa } from './tarefa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'senha',
      database: 'tarefa',
      entities: [Tarefa], // entidades/classes],
      synchronize: false
    }),
    TypeOrmModule.forFeature([Tarefa])
  ],
  controllers: [AppController, tarefaController],
  providers: [AppService],
})
export class AppModule {}
