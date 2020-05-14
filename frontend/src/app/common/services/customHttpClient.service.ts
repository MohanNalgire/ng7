import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class CustomHttpClientService extends HttpClient{

    private constructor(
        private httpClient:HttpClient,
        private httpHandler:HttpHandler
    ){
        super(httpHandler);
    }

    getCall(url): Observable<any>{
        return super.get(url);
    }

    postCall(url,body): Observable<any>{
        return super.post(url,body,{});
    }
    
    putCall(url,body): Observable<any>{
        return super.put(url,body,{});
    }

    patchCall(url,body): Observable<any>{
        return super.patch(url,body,{});
    }

    deleteCall(url): Observable<any>{
        return super.delete(url,{});
    }
    
    headCall(url): Observable<any>{
        return super.head(url,{});
    }
    
    jsonpCall(url): Observable<any> {
        return super.jsonp(url,'');
    }
    
    optionsCall(url): Observable<any>{
        return super.get(url);
    }
    
    requestCall(url): Observable<any>{
        return super.request(url);
    }
    
    fileUpload(): Observable<any>{
        // returning progress values of upload
        return of();
    }
    
    fileExport(): Observable<any>{
        // returning progress value of export
        return of();
    }
    
}