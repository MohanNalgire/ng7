import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  private apiURL ='http://localhost:3000/users'
  getUserLogin () {
    console.log("this.apiURLLLLLLLLLLLLLL");
  return this._http.get(this.apiURL);
  
  }

}