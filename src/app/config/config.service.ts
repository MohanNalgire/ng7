import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_URLS } from '../core/urls.constant';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appConfig;
  //private configEnv='http://localhost:4100/env';
  private configEnv=CUSTOM_URLS.urlconfigEnv;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get(this.configEnv)
      .toPromise()
      .then(data => {
        console.log('data server meta tags',data);
        this.appConfig = data;
      });
  }

  getConfig() {
    return this.appConfig;
  }

}
