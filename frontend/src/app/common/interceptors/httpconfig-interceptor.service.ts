import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     *  Header modification
     */

    /** 2019/05/28  |
     *  If the user is not logged in then use uuid for handling all the requests.
     *  Implement the uuid based request hanlding for the guest users.
     */
    let sessionDetails =  JSON.parse( localStorage.getItem('userDetails'));
    let authorizationObj={
      'authentication_type':(sessionDetails)?sessionDetails.token_type:'Basic',
      'credentials':(sessionDetails)?sessionDetails.access_token:'',//uuid
    };

    const modifiedReq = request.clone(
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `${authorizationObj.authentication_type} ${authorizationObj.credentials}`
        }),
        //reportProgress: boolean,
        //params: HttpParams,
        responseType: 'json',//"arraybuffer" | "blob" | "text" | "json",
        withCredentials: true,
        // body: V,
        // method: string
        // url: string
        // setHeaders: {},
        // setParams: {}
      });

    return next.handle(modifiedReq);
    //Reference https://github.com/vigneshsithirai/Angular-Interceptor/blob/master/src/app/interceptor/httpconfig.interceptor.ts
  }
}
