import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
        Exercicio // entidades/classes
      ],
      synchronize: false
    }),
    TypeOrmModule.forFeature([Exercicio])
  ],
  controllers: [AppController, exercicioController],
  providers: [AppService],
})
export class AppModule {}
