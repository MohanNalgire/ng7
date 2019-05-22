import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { SeoService } from '../../services/seo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public questions: Array<any>;

  constructor(private login: LoginService, private seoMeta: SeoService, private router: Router, private route: ActivatedRoute) {

    this.route.fragment.subscribe((fragment: string) => {

      var x = fragment.split('&');
      var userDetailsObj = {};
      for (var i = 0; i < x.length; i++) {
        var split = x[i].split('=');
        userDetailsObj[split[0].trim()] = split[1].trim();
      }
      localStorage.setItem('userDetails',JSON.stringify(userDetailsObj));

    })


    seoMeta.setPagetitleMetaTag('home');
  }

  ngOnInit() {
    this.login.isUserLogedIn();
  }


}
