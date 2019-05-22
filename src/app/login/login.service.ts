import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../user/user';
import { catchError, map, tap, filter, find } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { UserService } from '../user/user.service';
import { SsoAuthService } from '../common/services/sso-auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginResult = null;
  constructor(private _http: HttpClient,private userService:UserService,private ssoAuthService:SsoAuthService) { }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  allUsers: Array<User>;
  private apiURL = 'http://localhost:3000/users'

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

    console.log('this.ssoservice.login()',this.ssoAuthService.login());

    return this._http.get<User[]>(this.apiURL)
      .pipe(
        map(results => results.filter(r => {
          console.log('test user', username, password);
          return r.password === password && r.username === username
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
      return (userDetails.userName && userDetails.userPassword) ? true : false;
    } else {
      return false;
    }
  }



   logout(){
     let sessionStatus,localStatus;
     sessionStatus=sessionStorage.removeItem('userDetails');
     localStatus=localStorage.removeItem('userDetails');
        if(typeof localStatus==='undefined' && sessionStatus==='undefined'){
          console.log('test on logout');
          return true;
        }else{
          return false;
        }
      }

}