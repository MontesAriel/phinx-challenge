import {Box} from '@mui/material'
import { Typography } from '@mui/material';

const PokemonList = ({ setPokemonJugador, pokemons }) => {
 
  const typeColors = {
    fuego: '#FF5733',
    agua: '#33A1FF',
    planta: '#4CAF50',
    electrico: '#FFD54F',
    hielo: '#B3E5FC',
    normal: '#BDBDBD',
    lucha: '#E57373',
    veneno: '#9C27B0',
    tierra: '#795548',
    volador: '#64B5F6',
    psiquico: '#F06292',
    bicho: '#DCE775',
    roca: '#A1887F',
    fantasma: '#9E9D24',
    dragón: '#FF9800',
    hada: '#F48FB1',
    acero: '#B0BEC5',
    siniestro: '#424242',
  };
  
  return (
      <ul className='container-card'>
      {pokemons.map(pokemon => (
         <Box className="pokemon-card" key={pokemon.id} onClick={() => setPokemonJugador(pokemon)} sx={{ backgroundColor: typeColors[pokemon.type] || '#FFFFFF',}}>
         <div className="pokemon-card-image">
           <img src={pokemon.imageUrl} alt={pokemon.name} width={100}/>
         </div>
         <Typography className="pokemon-card-unit-name" sx={{fontWeight:600, fontSize:18}}>{pokemon.name}</Typography>
        
       </Box>
      ))} 
      </ul>
  );
};

export default PokemonList;
