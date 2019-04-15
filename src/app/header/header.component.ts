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
      console.log(event,this.nav);
      if (event instanceof NavigationEnd) {

        switch (event.url) {
          case '/welcome':
            this.nav.visible = false; break;
          case '/login':
            this.nav.visible = false; break;
          case '/signup':
            this.nav.visible = false; break;
          case '/':
            this.nav.visible = false; break;
          default:
            this.nav.visible = true;
        }
      }
    });
  }

}
