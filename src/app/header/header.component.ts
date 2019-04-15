import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private nav: HeaderService
  ) { }

  ngOnInit() {
    this.getCurrentPageUrl();
  }

  getCurrentPageUrl() {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        console.log(event.url);
        switch (event.url) {
          case '/welcome':
            this.nav.visible = {
              'welcome': false,
              'signup': true,
              'login': false,
              'home': false,
              'users': false,
              'questions':false
            };
            break;
          case '/login':
            this.nav.visible = {
              'welcome': false,
              'signup': true,
              'login': false,
              'home': false,
              'users': false,
              'questions':false
            };
            break;
          case '/signup':
            this.nav.visible = {
              'welcome': false,
              'signup': false,
              'login': false,
              'home': false,
              'users': false,
              'questions':false
            };
            break;
          case '/':
            this.nav.visible = {
              'welcome': false,
              'signup': true,
              'login': false,
              'home': false,
              'users': false,
              'questions':false
            };
            break;
          default:
            this.nav.visible = {
              'welcome': false,
              'signup': true,
              'login': false,
              'home': false,
              'users': false,
              'questions':false
            };;
        }
      }
    });
  }

}
