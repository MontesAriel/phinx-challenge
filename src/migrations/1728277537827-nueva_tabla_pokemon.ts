import { MigrationInterface, QueryRunner } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

export class SeedPokemon1645612345678 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
    // Eliminar la tabla "pokemon" si ya existe
      await queryRunner.query(`DROP TABLE IF EXISTS "pokemon"`);
      // Crear la tabla "pokemon" si no existe
      await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "pokemon" (
          "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          "name" text NOT NULL,
          "attack" integer NOT NULL,
          "defense" integer NOT NULL,
          "hp" integer NOT NULL,
          "speed" integer NOT NULL,
          "type" text NOT NULL,
          "imageUrl" text NOT NULL
        )
      `);
      const rawData = fs.readFileSync(path.join(__dirname, '../data/pokemon.json'), 'utf-8');
      const pokemonData = JSON.parse(rawData).pokemon; 
  
      // Insertar datos en la tabla "pokemon"
      for (const pokemon of pokemonData) {
          await queryRunner.query(`
            INSERT INTO pokemon (name, attack, defense, hp, speed, type, imageUrl)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [pokemon.name, pokemon.attack, pokemon.defense, pokemon.hp, pokemon.speed, pokemon.type, pokemon.imageUrl]
        );
      }
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      // Eliminar la tabla "pokemon" en caso de revertir la migración
      await queryRunner.query(`DROP TABLE IF EXISTS "pokemon"`);
    }
  }
  