import { Ingredient } from '../../panier/models/ingredient.interface';

export interface Cocktail {
  id?: string;
  name: string;
  img: string;
  description: string;
  ingredients: Ingredient[];
}
