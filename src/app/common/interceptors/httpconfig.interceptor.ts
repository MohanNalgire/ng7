import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('test interceptor',request,next);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
          }
          return event;
      }),
      catchError((error: HttpErrorResponse)=>{
        console.log("respone error",error);
        return throwError(error);
      })
      
      );
  //Reference https://github.com/vigneshsithirai/Angular-Interceptor/blob/master/src/app/interceptor/httpconfig.interceptor.ts
    }
}