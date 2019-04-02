import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import { catchError, map, tap, flatMap} from 'rxjs/operators';
=======

import { User } from './../user/user';

import { catchError, map, tap,filter,find } from 'rxjs/operators';
>>>>>>> 7973996c53bc954b98c8cf9da9eb7d03c4167692
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
<<<<<<< HEAD
    console.log("checkUserLogin called");
   // this.allUsers = this.getList()
 
      
      return this._http.get(this.apiURL).pipe(
        map(res => {
         
          this.allUsers = res;
          console.log("?????????????????????????????????????????????????????????/",this.allUsers)
        })
      );
         
=======
    this.getList()
    .subscribe(response => 
      {
        var result = Object.keys(response).map(function(key) {
          return [Number(key), response[key]];
        });
        console.log('typeof',result);
      }
      );

   
>>>>>>> 7973996c53bc954b98c8cf9da9eb7d03c4167692
  }

}