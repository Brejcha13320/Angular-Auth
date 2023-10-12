import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Profile, Recovery, Register, UserData } from '@interfaces/auth';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiBaseUrl;
  user$ = new BehaviorSubject<UserData | null>(null);

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(email: string, password: string): Observable<Login> {
    return this.http
      .post<Login>(`${this.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((data: Login) => {
          this.tokenService.saveToken(data.data.token);
        })
      );
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

  getProfile(): Observable<Profile> {
    const token = this.tokenService.getToken();
    return this.http
      .get<Profile>(`${this.apiUrl}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(
        tap(({ data }) => {
          this.user$.next(data);
        })
      );
  }

  logout() {
    this.tokenService.removeToken();
  }
}
