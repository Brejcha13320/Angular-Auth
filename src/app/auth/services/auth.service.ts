import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Recovery, Register } from '@interfaces/auth';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/auth/login`, {
      email,
      password,
    });
  }

  register(
    email: string,
    password: string,
    name: string
  ): Observable<Register> {
    return this.http.post<Register>(`${this.apiUrl}/auth/register`, {
      email,
      password,
      name,
    });
  }

  registerAndLogin(email: string, password: string, name: string) {
    return this.http
      .post<Register>(`${this.apiUrl}/auth/register`, {
        email,
        password,
        name,
      })
      .pipe(switchMap(() => this.login(email, password)));
  }

  recovery(email: string): Observable<Recovery> {
    return this.http.post<Recovery>(`${this.apiUrl}/auth/recovery`, {
      email,
    });
  }

  recoveryPassword(token: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/recovery-password`, {
      token,
      password,
    });
  }
}
