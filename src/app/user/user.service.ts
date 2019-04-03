import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUser() {
    console.log(" getList called ");
    return this._http.get('http://localhost:3000/users');
    
  }
}
