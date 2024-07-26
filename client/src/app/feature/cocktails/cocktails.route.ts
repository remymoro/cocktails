import { Routes } from '@angular/router';
import { CocktailContainerComponent } from './components/cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './components/cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './components/cocktail-container/cocktail-form/cocktail-form.component';

export const cocktailRoutes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: 'new', component: CocktailFormComponent },
      { path: ':index/edit', component: CocktailFormComponent },
      { path: ':index', component: CocktailDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
];
