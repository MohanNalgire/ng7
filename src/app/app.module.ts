import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
<<<<<<< HEAD
import { AppModule } from './app/app.module';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> e14a3908bba0280ea6543a78d249838b063fdfc7


@NgModule({
  declarations: [
    AppComponent,
    FileNotFoundComponent,
    HomeComponent
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
