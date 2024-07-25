import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Cocktail } from 'src/cocktail/entities/cocktail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient, Cocktail])],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
