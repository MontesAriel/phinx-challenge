import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../model/pokemon.entity';
import { Battle } from '../model/battle.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,

    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
  ) {}

  async getAllPokemon(): Promise<Pokemon[]> {
    return await this.pokemonRepository.find();
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOneBy({ id });
    if (!pokemon) {
      throw new Error(`Pokémon con ID ${id} no encontrado`);
    }
    return pokemon;
  }

  async saveBattle(pokemon1: Pokemon, pokemon2: Pokemon, winner: Pokemon) {
    const battle = new Battle();
    battle.pokemon1 = pokemon1;
    battle.pokemon2 = pokemon2;
    battle.winner = winner;
    return await this.battleRepository.save(battle);
  }

  simulateBattle(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
    let attacker = pokemon1.speed >= pokemon2.speed ? pokemon1 : pokemon2;
    let defender = pokemon1.speed >= pokemon2.speed ? pokemon2 : pokemon1;

    if (pokemon1.speed === pokemon2.speed) {
      attacker = pokemon1.attack >= pokemon2.attack ? pokemon1 : pokemon2;
      defender = pokemon1.attack >= pokemon2.attack ? pokemon2 : pokemon1;
    }

    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      defender.hp -= Math.max(1, attacker.attack - defender.defense);

      if (defender.hp <= 0) {
        return attacker;
      }

      [attacker, defender] = [defender, attacker];
    }

    return attacker;
  }
}
