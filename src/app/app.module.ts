import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ConfigComponent } from './config/config.component';
//Store setup
import { StoreModule } from '@ngrx/store';
import { EffectsModule }  from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers/app.reducers';

import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [

    ConfigComponent],
  imports: [
  BrowserModule,
    //
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects,ConfigEffects]),
    //Routing
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    environment.production?StoreDevtoolsModule.instrument():[],
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
