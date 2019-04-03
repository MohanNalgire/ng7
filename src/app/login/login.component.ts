import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _ls: LoginService) { }

  

  ngOnInit() {
<<<<<<< HEAD
    this.getUserLogin();
    // this.addUserLogin()
=======
    this._ls.checkUserLogin()
>>>>>>> 5486adbca01a6d56f800254341bda2d78eb1955c

    //this._ls.checkUserLogin().subscribe();
   
  }


  


  getUserLogin() {
    let r = this._ls.getList()
      .subscribe(
        next => {
         // console.log('test', next);
        },
        err => {
          console.error(err);
          console.warn();
        },
        () => {
          console.info("Completed.");
        }
      );

  }

  addUserLogin() {
    let r = this._ls.addToList()
      .subscribe(
        next => {
          console.log('test', next);
        },
        err => {
          console.error(err);
          console.warn();
        },
        () => {
          console.info("Completed.");
        }
      );
  }

  editList() {

  }


}
