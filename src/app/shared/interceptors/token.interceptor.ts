import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from 'src/app/auth/services/token.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private readonly router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.includes('/auth/login') ||
      request.url.includes('/auth/register') ||
      request.url.includes('/auth/recovery') ||
      request.url.includes('/auth/recovery-password')
    ) {
      return next.handle(request);
    }

    return this.addToken(request, next).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && error.error.error == 'Token no valido') {
          this.authService.logout();
        }
        return throwError(() => error);
      })
    );
  }

  private addToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.tokenService.getToken();
    if (token) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
