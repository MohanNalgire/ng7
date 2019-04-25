import { Component, OnInit } from '@angular/core';
import { SeoService } from '../common/services/seo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private seoMeta:SeoService) {
    seoMeta.setPagetitleMetaTag('welcome');
  }

  ngOnInit() {
  }

}
