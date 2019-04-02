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
    this.getUserLogin();
    // this.addUserLogin()

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
