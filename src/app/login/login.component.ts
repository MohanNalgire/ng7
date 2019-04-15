import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(
    private router:Router,
    private _ls: LoginService) { }



  ngOnInit() { }

  loginSubmit() {
    console.warn(this.profileForm.value.name);
    var enteredValue = this.profileForm.value;

    if (enteredValue) {
      this._ls.checkUserLogin()
        .subscribe(result => {
          console.log("result", result);
          this.loginResult = result[0];
          if (this.loginResult) {
            if (enteredValue.name == this.loginResult.username && enteredValue.pwd == this.loginResult.password) {
              console.log('valid user');
              this.router.navigate(['/home']);
            }
            else {
              console.log('Not a valid user', enteredValue);
              this.router.navigate(['/signup']);
            }
          } else {

          }

        });

    } else {

    }
  }




}
