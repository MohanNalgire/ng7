import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { EnvServiceProvider } from './env.service.provider';
import { SeoService } from './common/services/seo.service';





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
    EnvServiceProvider,
    SeoService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
