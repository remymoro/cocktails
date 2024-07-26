import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './entities/cocktail.entity';
import { CreateCocktailDto } from './dto/create-cocktail.dto';

@Controller('cocktails')
export class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCocktailDto: CreateCocktailDto,
  ): Promise<Cocktail> {
    return this.cocktailService.update(id, updateCocktailDto);
  }
  @Post()
  create(@Body() cocktail: Cocktail): Promise<Cocktail> {
    return this.cocktailService.create(cocktail);
  }

  @Get()
  findAll(): Promise<Cocktail[]> {
    return this.cocktailService.findAll();
  }
}
