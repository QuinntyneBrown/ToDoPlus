import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContextService } from '@api';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private readonly _contextService: ContextService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request.clone({
      headers: request.headers
        .set('ContextHeader', "1")
    }));
  }
}
