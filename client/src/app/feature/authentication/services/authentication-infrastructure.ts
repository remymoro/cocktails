import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { AuthenticationUser } from '../models/authentication-user';

const fakeService: AuthenticationInfrastructure = {
  login(email, password): Observable<AuthenticationUser> {
    const user: AuthenticationUser = {
      surname: 'Chewie',
    };
    return of(user).pipe(delay(1500));
  },
};

@Injectable({
  providedIn: 'root',
  useValue: fakeService,
})
export class AuthenticationInfrastructure {
  login(email: string, password: string): Observable<AuthenticationUser> {
    throw new Error('not implemented exectption');
  }
}
