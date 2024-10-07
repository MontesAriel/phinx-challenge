import React from 'react';
import { Typography, Button, Box, LinearProgress } from '@mui/material';

const PokemonCard = ({ pokemon, pokemonOponente, iniciarBatalla, resultado }) => {

  const maxStats = {
    attack: 6,
    defense: 6,
    speed: 6,
    hp: 6,
  };

  const calculateProgress = (value, max) => {
    return (value / max) * 100;
  };

  return (
    <Box className='container-battle'>
      <Box>
        <Box className="pokemon-card-battle" key={pokemon.id}>
          <div className="pokemon-card_image_battle">
            <img src={pokemon.imageUrl} alt={pokemon.name} width={100} />
          </div>
          <Typography sx={{textTransform:'uppercase', fontSize:12, fontWeight:800, color:'#555'}}>{pokemon.type}</Typography>
          <Typography sx={{fontSize:26}}>{pokemon.name}</Typography>
          <Box>
            <Box>
              <Typography className="pokemon-card-description">
                <span>Ataque: </span>
              </Typography>
              <LinearProgress variant="determinate" color='success' sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemon.attack, maxStats.attack)} />
            </Box>
            <Box>
              <Typography className="pokemon-card-description">
                <span>Defensa: </span>
              </Typography>
              <LinearProgress variant="determinate" color='success' sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemon.defense, maxStats.defense)} />
            </Box>
            <Box>
              <Typography className="pokemon-card-description">
                <span>HP: </span>
              </Typography>
              <LinearProgress variant="determinate" color='success' sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemon.hp, maxStats.hp)} />
            </Box>
            <Box>
              <Typography className="pokemon-card-description">
                <span>Velocidad: </span>
              </Typography>
              <LinearProgress variant="determinate" color='success' sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemon.speed, maxStats.speed)} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button onClick={iniciarBatalla} variant='contained' color='success'>Start battle</Button>
        {resultado && <p className='ganador'>{resultado}</p>}
      </Box>
      {pokemonOponente && 
        <Box>
          <Box className="pokemon-card-battle" key={pokemonOponente.id}>
            <div className="pokemon-card_image_battle">
              <img src={pokemonOponente.imageUrl} alt={pokemonOponente.name} width={100} />
            </div>
            <Typography sx={{textTransform:'uppercase', fontSize:12, fontWeight:800, color:'#555'}}>{pokemonOponente.type}</Typography>
            <Typography sx={{fontSize:26}}>{pokemonOponente.name}</Typography>
            <Box>
              <Box>
                <Typography className="pokemon-card-description">
                  <span>Ataque: </span> 
                </Typography>
                <LinearProgress variant="determinate" color='success'  sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemonOponente.attack, maxStats.attack)} />
              </Box>
              <Box>
                <Typography className="pokemon-card-description">
                  <span>Defensa: </span>
                </Typography>
                <LinearProgress variant="determinate" color='success' sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemonOponente.defense, maxStats.defense)} />
              </Box>
              <Box>
                <Typography className="pokemon-card-description">
                  <span>HP: </span>
                </Typography>
                <LinearProgress variant="determinate" color='success' sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemonOponente.hp, maxStats.hp)} />
              </Box>
              <Box className="attributes-battle">
                <Typography className="pokemon-card-description">
                  <span>Velocidad: </span>
                </Typography>
                <LinearProgress variant="determinate" color='success' sx={{ height: 10, borderRadius:5 }} value={calculateProgress(pokemonOponente.speed, maxStats.speed)} />
              </Box>
            </Box>
          </Box>
        </Box>
      }
    </Box>
  );
};

export default PokemonCard;
