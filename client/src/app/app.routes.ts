import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    loadChildren: () =>
      import('./feature/cocktails/cocktails.route').then(
        (item) => item.cocktailRoutes
      ),
  },

  {
    path: '',
    loadChildren: () =>
      import('./feature/panier/panier.route').then((item) => item.panierRoutes),
  },
];
