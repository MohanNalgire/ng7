import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../env.service';
import { CUSTOM_URLS } from '../../core/urls.constant';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
private urlPageMetaApi: string =CUSTOM_URLS.urlPageMetaTags;

  constructor(private meta: Meta, private title: Title, private _http: HttpClient, private env: EnvService) {
    // console.log('env',env);
  }

  setPagetitleMetaTag(moduleName) {
    this._http.get(this.urlPageMetaApi).subscribe(
      data => {
        if (data) {
          let moduleMetaData = data[moduleName];
          if (moduleMetaData.hasOwnProperty('title') || moduleMetaData.hasOwnProperty('metaTags')) {
            this.title.setTitle(moduleMetaData.title);
            this.meta.addTags(moduleMetaData.metaTags);
          }
        }
      },
      error => {
        console.error('metaTag service', error);
      },
      () => {
        console.info('metaTag service completed.');
      }
    );
  }
}
