import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SeoService } from './common/services/seo.service';
import { EnvService } from './env.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7project';


  constructor(private seoMeta:SeoService,private env:EnvService,private logger: NGXLogger){
    seoMeta.setPagetitleMetaTag('login');
    //console.log('env',env);
    /**
     *  logger example and related methods.
     *  set logger files environment wise.
     */
    this.logger.debug("Debug message");
    this.logger.info("Info message");
    this.logger.log("Default log message");
    this.logger.warn("Warning message");
    this.logger.error("Error message");

  }
}
