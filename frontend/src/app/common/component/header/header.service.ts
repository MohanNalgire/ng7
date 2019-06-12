import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { CUSTOM_URLS } from 'src/app/core/urls.constant';

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
  //headerApiUrl = 'http://localhost:4100/headerMenu';\
  headerApiUrl =CUSTOM_URLS.urlHeaderMenu;
  visibleMenu: any;
  constructor(private _http: HttpClient) { }

  isMenuAllowedOnUrl() {

  }

  getAllMenus() {
    return this._http.get<VisibleMenu>(this.headerApiUrl);
  }

  getMenuByUrl(urlPage):Observable<Object>{

    if (urlPage) {
        return this._http.get<Array<any>>(`${this.headerApiUrl}/${urlPage}`);
    }else{
      return throwError('Header service error.');
    }

  }

}
