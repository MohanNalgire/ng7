import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  allUsers:any;
  private apiURL ='http://localhost:3000/users'

  objBody = {
    "userName": "nagaraj",
    "pwd": "biradar",
    "author": "typicode"
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
    this.allUsers = this.getList().subscribe(
      data=>{
        console.log('ms ',Object.keys(data).map(function(key) {
          console.log(data[key]);
        }));


        if(data){

          
        }else{}
      },
      err=>{},
      ()=>{}
    );

   
  }

}