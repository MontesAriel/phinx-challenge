import React, { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import PokemonCard from './PokemonCard';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
const Batalla = () => {
  const [pokemonJugador, setPokemonJugador] = useState(null);
  const [pokemonOponente, setPokemonOponente] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if(pokemonJugador) {
        const oponente = pokemons[Math.floor(Math.random() * pokemons.length)];
        console.log({oponente})
        setPokemonOponente(oponente)
    }
  }, [pokemonJugador])

  const iniciarBatalla = async () => {
    const resBatalla = await fetch(
      `http://localhost:3000/pokemon/battle`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pokemon1Id: pokemonJugador.id,
          pokemon2Id: pokemonOponente.id,
        }),
      }
    );
  
    if (!resBatalla.ok) {
      console.error('Error al iniciar la batalla:', resBatalla.statusText);
      return; // Manejo de errores
    }
  
    const { winner } = await resBatalla.json();
    setResultado(`${winner.name} wins!`);
  };
  
  useEffect(() => {
    // Obtener todos los Pokémon desde el backend 
    axios.get('http://localhost:3000/pokemon')
      .then(response => {
        setPokemons(response.data);
        console.log({response})
      })
      .catch(error => {
        console.error('Hubo un error al obtener los Pokémon', error);
      });
  }, []);
  return (
    <Container>
      <h1>Battle of Pokemon</h1>
      <Typography variant='h6'>Select your pokemon</Typography>
      <PokemonList setPokemonJugador={setPokemonJugador} pokemons={pokemons}/>
      {pokemonJugador && (
        <>
          <PokemonCard pokemon={pokemonJugador} pokemonOponente={pokemonOponente} iniciarBatalla={iniciarBatalla} resultado={resultado}/>
        </>
      )}
    </Container>
  );
};

export default Batalla;
