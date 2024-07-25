import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Cocktail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column('text')
  description: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.cocktail, {
    cascade: true,
  })
  ingredients: Ingredient[];

  @CreateDateColumn()
  createdAt: Date;
}
