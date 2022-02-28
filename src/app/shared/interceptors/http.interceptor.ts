import { Injectable, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements  HttpInterceptor {

  constructor(@Inject('BASE_API_URL') private baseUrl: string) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    request = request.clone({
      headers: request.headers.set('Access-Control-Allow-Origin', '*')
    });

    request = request.clone({ url: `${this.baseUrl}${request.url}` });
    if(request.headers.get("content-type")) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }
   
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}

  