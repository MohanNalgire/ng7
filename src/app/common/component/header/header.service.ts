import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

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

    if (urlPage) {
        return this._http.get<Array<any>>(`${this.headerApiUrl}/${urlPage}`);
    }else{
      return throwError('Header service error.');
    }

  }

}
