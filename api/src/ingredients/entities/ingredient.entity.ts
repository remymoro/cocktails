import { Cocktail } from 'src/cocktail/entities/cocktail.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  unit: string;

  @ManyToOne(() => Cocktail, (cocktail) => cocktail.ingredients, {
    onDelete: 'CASCADE',
  })
  cocktail: Cocktail;
}
