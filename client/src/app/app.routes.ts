import { Routes } from '@angular/router';
import { userIsAuthenticated } from './feature/authentication/guards/authenticate.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/cocktails/cocktails.route').then(
        (item) => item.cocktailRoutes
      ),
    canActivate: [userIsAuthenticated],
  },

  {
    path: '',
    loadChildren: () =>
      import('./feature/panier/panier.route').then((item) => item.panierRoutes),
  },

  {
    path: '',
    loadChildren: () =>
      import('./feature/authentication/authentication.routes').then(
        (item) => item.authenticationRoutes
      ),
  },
];
