import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logOut:LoginService) { }
  logOutStatus:boolean;
  ngOnInit() {
    /**
     *  Why separate logout component?
     *
     *  1 To do "Survey"
     *  2 To show 'survey; data.
     *  3 To collect 'Openion'.
     */
    this.logout();
  }

  logout(){
    this.logOutStatus=this.logOut.logout();
    //End user session
    //Remove session variables
    //Remove local storage variables
  }
}
