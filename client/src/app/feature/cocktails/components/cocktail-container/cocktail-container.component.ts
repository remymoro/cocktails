import { Component, inject, Signal } from '@angular/core';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailService } from '../../services/cocktail.service';
import { Observable } from 'rxjs';
import { Cocktail } from '../../models/cocktail.interface';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cocktails-container',
  standalone: true,
  imports: [CocktailsListComponent, RouterOutlet, AsyncPipe],
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.css',
})
export class CocktailContainerComponent {
  private cocktailService: CocktailService = inject(CocktailService);

  public cocktails$: Observable<Cocktail[] | []> =
    this.cocktailService.cocktails$;
}
