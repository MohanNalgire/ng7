import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { HttpConfigInterceptor } from './httpconfig-interceptor.service';
import { HttpErrorNotifierInterceptorService } from './error-notifier-interceptor.service';
import { AuthInterceptorService } from './auth-interceptor.service';

import { XML2JsonInterceptorService } from './xml2-json-interceptor.service';
import { AjaxBusyIdentifierInterceptorService } from './ajax-busy-identifier-interceptor.service';
import { RequestTimestampInterceptorService } from './request-timestamp-interceptor.service';

import { RetryInterceptorService } from './retry-interceptor.service';


export const InterceptorProviders=[
    {provide:HTTP_INTERCEPTORS, useClass:HttpConfigInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:HttpErrorNotifierInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService,multi:true},
    // {provide:HTTP_INTERCEPTORS, useClass:XML2JsonInterceptorService,multi:true},
    // {provide:HTTP_INTERCEPTORS, useClass:RetryInterceptorService,multi:true},
    // {provide:HTTP_INTERCEPTORS, useClass:RequestTimestampInterceptorService,multi:true},
    // {provide:HTTP_INTERCEPTORS, useClass:AjaxBusyIdentifierInterceptorService,multi:true}
];
