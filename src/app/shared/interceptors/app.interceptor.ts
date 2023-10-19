import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  apiUrl = environment.apiBaseUrl;
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/assets/')) {
      return next.handle(request);
    }

    let requestClone = request.clone({
      url: this.apiUrl + request.url,
      headers: request.headers,
    });

    return next.handle(requestClone);
  }
}
