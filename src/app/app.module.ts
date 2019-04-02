import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { AppModule } from './app/app.module';


@NgModule({
  declarations: [
    AppComponent,
    FileNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
