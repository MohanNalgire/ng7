import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public questions:Array<any>;

  constructor(private login:LoginService,private seoMeta:SeoService) {
    seoMeta.setPagetitleMetaTag('home');
  }

  ngOnInit() {
    this.login.isUserLogedIn();
  }


}
