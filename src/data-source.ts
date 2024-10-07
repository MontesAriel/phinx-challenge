import { DataSource } from 'typeorm';
import { Pokemon } from './model/pokemon.entity'; // Importa la entidad Pokemon
import { Battle } from './model/battle.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'src/database.sqlite',
  entities: [Pokemon, Battle],
  migrations: ["src/migrations/**/*{.js,.ts}"],
  synchronize: true,
});
