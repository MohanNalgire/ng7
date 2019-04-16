import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions/questions.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public questions:Array<any>;
  constructor(private login:LoginService) { }

  ngOnInit() {
    this.login.isUserLogedIn();
  }


}
