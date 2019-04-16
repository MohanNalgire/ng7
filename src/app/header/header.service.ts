import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VisibleMenu {
  'welcome': boolean,
  'signup': boolean,
  'login': boolean,
  'logout': boolean,
  'home': boolean,
  'users': boolean,
  'questions': boolean
}

@Injectable({
  providedIn: 'root'
})


export class HeaderService {
  headerApiUrl = 'http://localhost:3000/headerMenu';
  visibleMenu: any;
  constructor(private _http: HttpClient) { }

  isMenuAllowedOnUrl() {

  }

  getAllMenus() {
    return this._http.get<VisibleMenu>(this.headerApiUrl);
  }

  getMenuByUrl(urlPage):Observable<Object>{
    console.log('urlpage',urlPage);
    if (urlPage) {
      let urlSplit = urlPage.split('/');
      let pageName = `?title=${urlSplit[1]}`;
      if (urlSplit.length > 0) {
        console.log('`${this.headerApiUrl}/${pageName}`',`${this.headerApiUrl}/${pageName}`);
        return this._http.get<Array<any>>(`${this.headerApiUrl}/${pageName}`);
      } else {

      }
    }else{
      console.log('test 1q');
    }

  }

}
