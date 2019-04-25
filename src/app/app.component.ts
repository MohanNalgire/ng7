import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SeoService } from './common/services/seo.service';
import { EnvService } from './env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7project';


  constructor(private seoMeta:SeoService,private env:EnvService){
    seoMeta.setPagetitleMetaTag('login');
    console.log('env',env);
  }
}
