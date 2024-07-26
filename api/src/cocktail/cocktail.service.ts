import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cocktail } from './entities/cocktail.entity';
import { Repository } from 'typeorm';
import { CreateCocktailDto } from './dto/create-cocktail.dto';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(Cocktail)
    private cocktailRepository: Repository<Cocktail>,
  ) {}

  create(cocktail: Cocktail): Promise<Cocktail> {
    cocktail = this.cocktailRepository.create(cocktail);
    return this.cocktailRepository.save(cocktail);
  }

  findAll(): Promise<Cocktail[]> {
    return this.cocktailRepository.find({ relations: ['ingredients'] });
  }

  async update(
    id: string,
    updateCocktailDto: CreateCocktailDto,
  ): Promise<Cocktail> {
    const cocktail = await this.cocktailRepository.findOneBy({ id });
    if (!cocktail) {
      throw new NotFoundException(`Cocktail with ID ${id} not found`);
    }

    const updatedCocktail = Object.assign(cocktail, updateCocktailDto);
    return this.cocktailRepository.save(updatedCocktail);
  }
}
