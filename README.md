# Pokémon Challenge Phinx

## Descripción
Pokémon Challenge Phinx es una aplicación de batalla de Pokémon donde los jugadores pueden seleccionar un Pokémon para luchar contra un oponente aleatorio. Cada Pokémon tiene diferentes estadísticas, como ataque, defensa, velocidad y HP, que influyen en el resultado de la batalla.

## Características
- Selección de un Pokémon para iniciar una batalla.
- Batalla contra un Pokémon aleatorio.
- Cálculo de la batalla basado en velocidad, ataque, defensa y HP.
  - El Pokémon con la velocidad más alta ataca primero; si hay un empate, el que tiene el ataque más alto ataca primero.
  - El daño se calcula restando la defensa del ataque (ataque - defensa). Si el ataque es igual o menor que la defensa, el daño es 1.
  - El daño se resta del HP.
  - Los Pokémon luchan por turnos, y todos los cálculos se realizan en una sola llamada al endpoint. El ganador se determina cuando el HP del enemigo llega a cero.

## Tecnologías Utilizadas
- **Backend**: NestJS, TypeORM, SQLite
- **Frontend**: React, Material-UI

## Instalación

### Backend
1. Ejecuta:
  npm install
  npm run migrate
  npm run start:dev

### Frontend
1.Navega a la carpeta del frontend y ejecuta
  npm install
  npm run start

