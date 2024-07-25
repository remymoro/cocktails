import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cocktail } from './entities/cocktail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(Cocktail)
    private cocktailsRepository: Repository<Cocktail>,
  ) {}

  create(cocktail: Cocktail): Promise<Cocktail> {
    cocktail = this.cocktailsRepository.create(cocktail);
    return this.cocktailsRepository.save(cocktail);
  }

  findAll(): Promise<Cocktail[]> {
    return this.cocktailsRepository.find({ relations: ['ingredients'] });
  }
}
