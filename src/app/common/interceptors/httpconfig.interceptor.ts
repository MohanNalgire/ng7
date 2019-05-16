import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private toastr:ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     *  Header modification
     */
    const modifiedReq = request.clone(
      {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      }),
      //reportProgress: boolean,
      //params: HttpParams,
      // responseType: "arraybuffer" | "blob" | "text" | "json",
      // withCredentials: boolean,
      // body: V,
      // method: string
      // url: string
      // setHeaders: {},
      // setParams: {}
    });

    return next.handle(modifiedReq).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {

          }
          return event;
      }),
      catchError((error: HttpErrorResponse)=>{
        if (error.status !== 401) {
          // 401 handled in auth.interceptor
          this.toastr.error(error.message,error.name,{'disableTimeOut':false});

        }
        return throwError(error);
      })

      );
  //Reference https://github.com/vigneshsithirai/Angular-Interceptor/blob/master/src/app/interceptor/httpconfig.interceptor.ts
    }
}
