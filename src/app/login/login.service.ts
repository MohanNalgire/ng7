import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './../user/user';

import { catchError, map, tap,filter,find } from 'rxjs/operators';
import { Observable,BehaviorSubject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  allUsers:Array<User>;
  private apiURL ='http://localhost:3000/users'

  objBody = {
    "id":0,
    "username": "nagaraj",
    "password": "12345",
    "firstName": "Nagaraj",
    "lastName": "Birajdar",
    "token": "qwerfsfsfs"
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  getList() {
    console.log(" getList called ");
    return this._http.get(this.apiURL);
  }

  addToList () {
    console.log(" addToList called ");
    return this._http.post(this.apiURL, this.objBody, this.httpOptions);
  }

  checkUserLogin(){

 
      
      let test=this._http.get<User[]>(this.apiURL)
      .pipe(
        map( results => results.filter(r =>{
          return  r.password=="biradar" && r.username==='ravi'
        })
        )
      )
      .subscribe(result=>{
        console.log(result);
      });

      
      
      
  
   
  }

}