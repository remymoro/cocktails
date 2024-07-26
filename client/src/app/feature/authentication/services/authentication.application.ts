import { Injectable, Signal, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationStore } from '../store';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);
  private readonly router = inject(Router);

  private redirectToLoginEffect = effect(() => {
    // si je suis authentifié je bouge vers la page d'accueil
    if (this.store.isAuthenticated()) {
      this.router.navigate(['cocktails']);
    }
  });

  login(login: string, password: string) {
    this.store.logIn({ login, password });
  }

  get isLoading(): Signal<boolean> {
    return this.store.isLoading;
  }

  get isAuthenticated(): Signal<boolean> {
    return this.store.isAuthenticated;
  }
}
