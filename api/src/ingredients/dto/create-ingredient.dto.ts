import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty({ message: 'The ingredient name field is required.' })
  name: string;

  @IsNumber()
  @IsNotEmpty({ message: 'The quantity field is required.' })
  quantity: number;
}
