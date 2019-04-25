import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { EnvServiceProvider } from './env.service.provider';
import { SeoService } from './common/services/seo.service';
import { ConfigService } from './config/config.service';


const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    /**
     *  Process for environment variable declarations
     *  1   EnvServiceProvider
     *  2   ConfigService
     *  3   Normal way - declare variables at compile time.(./evironment folder files)
     */

    EnvServiceProvider,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    },
    SeoService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
