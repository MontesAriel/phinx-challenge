import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../pokemon/entities/pokemon.entity';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'pokemon_1_id' })
  pokemon1!: Pokemon;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'pokemon_2_id' })
  pokemon2!: Pokemon;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'winner_id' })
  winner!: Pokemon;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
