import { computed, inject } from '@angular/core';
import { AuthenticationUser } from '../models/authentication-user';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { concatMap, pipe, tap } from 'rxjs';
import { AuthenticationInfrastructure } from '../services/authentication-infrastructure';
import { tapResponse } from '@ngrx/operators';

// 1 . état à créer
export interface AuthenticationState {
  user: AuthenticationUser | undefined | null;
  isLoading: boolean;
}

export type AuthenticationType = {
  login: string;
  password: string;
};

// 2 . valeur initiale
const initialeValue: AuthenticationState = {
  user: undefined,
  isLoading: false,
};

// 3 reducer /store ..

export const AuthenticationStore = signalStore(
  { providedIn: 'root' },
  withState(initialeValue),
  withComputed((store) => ({
    isAuthenticated: computed(() => store.user() !== undefined),
  })),
  withMethods((store, infra = inject(AuthenticationInfrastructure)) => ({
    logIn: rxMethod<AuthenticationType>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        concatMap((input) => {
          return infra.login(input.login, input.password).pipe(
            tapResponse({
              next: (user) =>
                patchState(store, { isLoading: false, user: user }),
              error: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);
