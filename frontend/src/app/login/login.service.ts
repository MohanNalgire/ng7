import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../user/user';
import { catchError, map, tap, filter, find } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { UserService } from '../user/user.service';
import { SsoAuthService } from '../common/services/sso-auth.service';
import { CUSTOM_URLS } from '../core/urls.constant';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated = false;
  authToken='';
  constructor(
    private _http: HttpClient,  
    private ssoAuthService: SsoAuthService
    ) { }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  allUsers: Array<User>;
  private apiURL = CUSTOM_URLS.urlUsers;

  objBody = {
    "id": 0,
    "username": "nagaraj",
    "password": "12345",
    "firstName": "Nagaraj",
    "lastName": "Birajdar",
    "token": "qwerfsfsfs"
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getList() {
    console.log(" getList called ");
    return this._http.get(this.apiURL);

  }

  addToList() {
    console.log(" addToList called ");
    return this._http.post(this.apiURL, this.objBody, this.httpOptions);
  }

  checkUserLogin(username, password) {
    let result = this._http.get<User[]>(this.apiURL);
    return result.pipe(
      map(results => results.filter(userDetails => {
        if (userDetails.password === password && userDetails.username === username) {
          //Set sesssion here
          sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
          console.log('this.ssoservice.login()',this.ssoAuthService.login());
          return true;
        } else {
          return false;
        }
      })
      ),
      catchError(error => {
        console.error('Error in service.', error);
        if (error.status == 0) {
          return throwError('Please check your server is running or not.');
        }
        return throwError(error);
      })

    );

  }


  isUserLogedIn() {
    let userDetails: any;
    userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    if (userDetails) {
      this.isAuthenticated=(userDetails.userName && userDetails.userPassword) ? true : false;
      return this.isAuthenticated;
    } else {
      this.isAuthenticated=false;
      return false;
    }
  }



  logout() {
    let sessionStatus, localStatus;
    sessionStatus = sessionStorage.removeItem('userDetails');
    localStatus = localStorage.removeItem('userDetails');
    if (typeof localStatus === 'undefined' && sessionStatus === 'undefined') {
      console.log('test on logout');
      return true;
    } else {
      return false;
    }
  }

}