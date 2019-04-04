import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { HomeComponent } from './home/home.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor} from './common/interceptors/httpconfig.interceptor';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    FileNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule

  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpConfigInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
