import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userApiUrl='http://localhost:3000/users';
  constructor(private _http: HttpClient) { }

  getUsers() {
    console.log(" getList called ");
    return this._http.get(this.userApiUrl);
  }
  getUser(userId){
    return this._http.get(`${this.userApiUrl}/${userId}`);
  }

  addUser(userDetails){
    return this._http.post(this.userApiUrl,userDetails,{});
  }


}
