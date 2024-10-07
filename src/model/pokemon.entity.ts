import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'integer' }) 
    attack: number;

    @Column({ type: 'integer' })
    defense: number;

    @Column({ type: 'integer' })
    hp: number;

    @Column({ type: 'integer' })
    speed: number;

    @Column({ type: 'text' })
    type: string;

    @Column({ type: 'text' })
    imageUrl: string;
}
