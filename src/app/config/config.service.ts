import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appConfig;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('http://localhost:3000/env')
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
