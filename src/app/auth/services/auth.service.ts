import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Profile, Recovery, Register, UserData } from '@interfaces/auth';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<UserData | null>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<Login> {
    return this.http
      .post<Login>('/auth/login', {
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
    return this.http.post<Register>('/auth/register', {
      email,
      password,
      name,
    });
  }

  registerAndLogin(email: string, password: string, name: string) {
    return this.http
      .post<Register>('/auth/register', {
        email,
        password,
        name,
      })
      .pipe(switchMap(() => this.login(email, password)));
  }

  recovery(email: string): Observable<Recovery> {
    return this.http.post<Recovery>('/auth/recovery', {
      email,
    });
  }

  recoveryPassword(token: string, password: string): Observable<any> {
    return this.http.post<any>('/auth/recovery-password', {
      token,
      password,
    });
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('/auth/profile').pipe(
      tap(({ data }) => {
        this.user$.next(data);
      })
    );
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/auth/login');
  }
}
