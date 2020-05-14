import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { CUSTOM_URLS } from 'src/app/core/urls.constant';
import { HttpClient } from '@angular/common/http';
import { CustomHttpClientService } from './customHttpClient.service';

@Injectable({
    providedIn:'root'
})

export class LoggerService {
    private readonly urlLogger:string=CUSTOM_URLS.urlLogger;
    public logs: Object;
    constructor(
        private _http:CustomHttpClientService,
        private ngxLogger:NGXLogger
    ){
        
    }

    logger(errorObj:{}){
        this._http.postCall(this.urlLogger,errorObj)
        .subscribe(
          data=>{
            this.logs=data;
          },
          error=>{
            console.log('Logs data', error);
          },
          ()=>{}
        );
    }
}