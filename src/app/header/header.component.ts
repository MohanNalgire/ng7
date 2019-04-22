import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { HeaderService, VisibleMenu } from './header.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public visibleMenu: {};
  public currentPage;
  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit() {

    this.getCurrentPageUrl();

  }

  getCurrentPageUrl() {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
        if (this.currentPage) {
          let urlSplit = this.currentPage.split('/');
          let pageName;
          if (urlSplit[1] && urlSplit[1]!=='') {
            pageName = `?title=${urlSplit[1]}`;
          } else {
            pageName = `?title=${this.router.url.replace('/','')}`;
          }

          this.visibleMenu = this.headerService.getMenuByUrl(pageName)
            .subscribe(
              result => {
                this.visibleMenu = result[0];
              },
              error => {
                console.error('header setting error', error);
              },
              () => { }
            );
        }
      }
      });
  }


  setVisibleMenu(currenPage) {
    console.log('test 1q');

    /* .subscribe(
      result=>{
        console.log("/questions",result);
        this.visibleMenu=result;
      },
      error=>{
        console.error('questions menu service.',error);
      },
      ()=>{});
 */
  }

}
