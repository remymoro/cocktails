import { Component } from '@angular/core';
import { CocktailsListComponent } from './cocktails-list';
import { CocktailDetailsComponent } from './cocktail-details';



@Component({
  selector: 'app-cocktails',
  imports: [CocktailsListComponent, CocktailDetailsComponent],
  template: `
    <app-cocktails-list class="w-half card" />
    <app-cocktail-details class="w-half card" />
  `,
  styles: `
    :host {
      display: flex;
      gap:24px;
      padding: 24px;
    }
  `,
})
export class CocktailsComponent {}