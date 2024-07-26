import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateIngredientDto } from 'src/ingredients/dto/create-ingredient.dto';

export class CreateCocktailDto {
  @IsString()
  @IsNotEmpty({ message: 'The name field is required.' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'The image URL field is required.' })
  img: string;

  @IsString()
  @IsNotEmpty({ message: 'The description field is required.' })
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateIngredientDto)
  ingredients: CreateIngredientDto[];
}
