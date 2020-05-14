import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { CUSTOM_URLS } from '../core/urls.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiUrl=CUSTOM_URLS.urlUsers;
  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(this.userApiUrl);
  }
  getUser(userId){
    return this._http.get(`${this.userApiUrl}/${userId}`);
  }

  addUser(userDetails){
    return this._http.post(this.userApiUrl,userDetails,{});
  }


}
