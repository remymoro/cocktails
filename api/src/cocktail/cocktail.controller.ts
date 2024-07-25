import { Body, Controller, Get, Post } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './entities/cocktail.entity';

@Controller('cocktails')
export class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Post()
  create(@Body() cocktail: Cocktail): Promise<Cocktail> {
    return this.cocktailService.create(cocktail);
  }

  @Get()
  findAll(): Promise<Cocktail[]> {
    return this.cocktailService.findAll();
  }
}
