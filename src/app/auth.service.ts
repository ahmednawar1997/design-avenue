import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login = (user: { email: string; password: string; }) => {
    return this.http.post<any>('http://localhost:3000/api/auth/signin', user)
      .pipe(tap(
        data => this.setSession(data),
        error => this.errorHandler(error)
      ));
  }

  private setSession = (authResult: any) => {
    console.log(authResult.expiresIn);
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  isLoggedIn = () => {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut = () => {
    return !this.isLoggedIn();
  }

  private getExpiration = () => {
    let expiration = localStorage.getItem('expires_at');
    console.log('expiration ', expiration);
    if (!expiration) {
      expiration = '0';
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  private errorHandler = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}`);
      console.error(error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
