import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './../user/user';

import { catchError, map, tap,filter,find } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  allUsers:Array<User>;
  private apiURL ='http://localhost:3000/users'

  objBody = {
    "userName": "nagaraj",
    "pwd": "biradar",
    "author": "typicode",
    "id":0
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  getList () {
    console.log(" getList called ");
    return this._http.get(this.apiURL);
  }

  addToList () {
    console.log(" addToList called ");
    return this._http.post(this.apiURL, this.objBody, this.httpOptions);
  }

  checkUserLogin(){
    this.getList()
    .subscribe(response => 
      {
        var result = Object.keys(response).map(function(key) {
          return [Number(key), response[key]];
        });
        console.log('typeof',result);
      }
      );

   
  }

}