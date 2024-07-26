import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationApplication } from '../services/authentication.application';

export const userIsAuthenticated: CanActivateFn = (
  route,
  state,
  application = inject(AuthenticationApplication),
  router = inject(Router)
) => {
  if (!application.isAuthenticated()) {
    router.navigate(['login']);
  }

  return application.isAuthenticated();
};
