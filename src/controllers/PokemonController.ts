import { Controller, Get, Post, Body } from '@nestjs/common';
import { PokemonService } from '../services/PokemonService';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getAllPokemon() {
    return await this.pokemonService.getAllPokemon();
  }

  @Post('battle')
  async battlePokemon(
    @Body('pokemon1Id') pokemon1Id: number,
    @Body('pokemon2Id') pokemon2Id: number,
  ) {
    const pokemon1 = await this.pokemonService.getPokemonById(pokemon1Id);
    const pokemon2 = await this.pokemonService.getPokemonById(pokemon2Id);

    if (!pokemon1 || !pokemon2) {
      return { error: 'Uno o ambos Pokémon no existen' };
    }

    const winner = this.pokemonService.simulateBattle(pokemon1, pokemon2);

    await this.pokemonService.saveBattle(pokemon1, pokemon2, winner);

    return {
      message: `${winner.name} ha ganado la batalla!`,
      winner,
    };
  }
}
