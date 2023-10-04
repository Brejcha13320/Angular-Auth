import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  apiBaseUrl = environment.apiBaseUrl;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/assets/')) {
      return next.handle(request);
    }
    return this.addToken(request, next);
  }

  addToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const accessToken = '';
    if (accessToken) {
      const authRequest = request.clone({
        url: this.apiBaseUrl + request.url,
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      return next.handle(authRequest);
    } else {
      const authRequest = request.clone({
        url: this.apiBaseUrl + request.url,
      });
      return next.handle(authRequest);
    }
  }
}
