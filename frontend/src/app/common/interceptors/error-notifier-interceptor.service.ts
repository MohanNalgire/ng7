import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable, Injector } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Injectable({
    providedIn:'root'
})

export class HttpErrorNotifierInterceptorService implements HttpInterceptor {
    constructor(
      private injector: Injector,
      private toastr: ToastrService
      ){}

    intercept(reqquest:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        // let loggerService= this.injector.get(LoggerService); // For handling Cyclic dependency error with HttpInterceptor
        return next.handle(reqquest).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
      
              }
              return event;
            }),
            catchError((error: HttpErrorResponse) => {
              switch (error.status) {
                case 0: 
                    this.toastr.error("Please check backend Server running or not ", error.name, { disableTimeOut: true });
                  break;
                case 400://Bad Request 
                  break;
                case 401://unauthorized
                  this.toastr.warning(error.error.message, error.error.error, { disableTimeOut: false });
                  break;
                case 403://Forbidden
                      break;
                case 404://Not Found
                  this.toastr.error(error.message, error.name, { disableTimeOut: true });
                  break;
                case 405://Method Not Allowed
                  break;                  
                case 406://Not Accepted 
                  break;
                case 407://Proxy Authenticaton Required
                  break;
                case 408://Request Timeout
                  break;
                case 409://Conflict
                  break;
                case 410://Gone
                  break;
                case 411://Length Required
                  break;
                case 500:
                  this.toastr.error(error.message, error.name, { disableTimeOut: true });
                  break;
              }
              // loggerService.logger(error);
              return throwError(error);
            })
      
          );
        
    }

}