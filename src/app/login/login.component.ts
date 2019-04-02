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
    let r=this._ls.getUserLogin().subscribe(
      next=>{
        console.log('test',next);
      },
      err=>{
        console.error(err);
        console.warn();
      },
      ()=>{
        console.info("Completed.");
      }
    );

   // console.log(r);
  }

}
