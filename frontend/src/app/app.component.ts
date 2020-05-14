import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { SeoService } from './common/services/seo.service';
import { EnvService } from './env.service';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7project';


  constructor(
    private seoMeta:SeoService,
    private env:EnvService,
    private logger: NGXLogger,
    private toastr: ToastrService
    ){
    seoMeta.setPagetitleMetaTag('login');
  }
}
