import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_URLS } from '../core/urls.constant';

@Injectable({
  providedIn: 'root'
})
// Currently not implemented
export class ConfigService {
  static appConfig;
  private configEnv=CUSTOM_URLS.urlconfigEnv;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    this.http.get(this.configEnv,{})
      .subscribe(data => {
        console.log('data server meta tags',data);
        ConfigService.appConfig = data;
        ConfigService.appConfig.freeze();
      });
  }

  getConfig() {
    return ConfigService.appConfig;
  }

}
