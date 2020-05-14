import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';
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
    private router: Router,
    private _ls: LoginService) { }



  ngOnInit() { }

  loginSubmit() {
    var enteredValue = this.profileForm.value;

    if (enteredValue) {
      this._ls.checkUserLogin(enteredValue.name, enteredValue.pwd)
        .subscribe(
          data => {
            console.log('data', data);
            this.loginResult = (data[0]) ? data[0] : {};
            if (enteredValue.name === this.loginResult.username && enteredValue.pwd === this.loginResult.password) {
              console.log('valid user');
              this.router.navigate(['/home']);
            }
            else {
              console.log('Not a valid user', enteredValue);
              this.router.navigate(['/signup']);
            }

          }
        );
    } else {
      console.warn("Please fill values in login form.");
    }
  }




}
