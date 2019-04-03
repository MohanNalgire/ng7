import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginResult;

  profileForm = new FormGroup({
    name: new FormControl(''),
    pwd: new FormControl(''),
    remember: new FormControl()
  });
  constructor(private _ls: LoginService) { }



  ngOnInit() {
<<<<<<< HEAD
    this._ls.checkUserLogin()
    .subscribe(result=>{
      console.log(result);
    });
=======

    //this.addUserLogin();


  }

  loginSubmit() {
    console.warn(this.profileForm.value.name);
    var enteredValue = this.profileForm.value;

    if (this.profileForm.value) {
      let whatValue = this._ls.checkUserLogin()
        .subscribe(result => {
          console.log("result", result);
          this.loginResult = result[0];
          if (this.loginResult) {
            if(enteredValue.name == this.loginResult.username && enteredValue.pwd == this.loginResult.password){
            console.log('valid user');
            }
            else{
              console.log('Not a valid user',enteredValue);
            }
          } else {
           
          }
          console.log("loginResult ==> ", this.loginResult);
        });;
      console.log("whatValue", whatValue);
    } else {

     }

>>>>>>> a0960b35c24caf81e52ec242bc6425bcf38828ad

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
