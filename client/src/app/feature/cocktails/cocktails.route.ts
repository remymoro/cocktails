import { Routes } from '@angular/router';
import { CocktailContainerComponent } from './components/cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './components/cocktail-container/cocktail-details/cocktail-details.component';

export const cocktailRoutes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: ':index', component: CocktailDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
];
