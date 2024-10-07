import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonController } from './controllers/PokemonController';
import { Pokemon } from './model/pokemon.entity';
import { Battle } from './model/battle.entity';
import { PokemonService } from './services/PokemonService';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend', 'public'),
    }),
    // Configuración de TypeORM
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/database.sqlite',
      entities: [Pokemon, Battle],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pokemon, Battle]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService]
})
export class AppModule {}
