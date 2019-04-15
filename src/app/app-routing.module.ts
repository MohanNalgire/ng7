import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module'
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { QuestionsModule } from './questions/questions.module';
//Components

import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { HomeComponent } from './home/home.component';

//Services
import { QuestionsService } from './questions/questions.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './common/interceptors/httpconfig.interceptor';

//Store setup
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment.prod';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigComponent } from './config/config.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'app',
    component:AppComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'filenotfound',
    component: FileNotFoundComponent
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'questions',
    loadChildren: './questions/questions.module#QuestionsModule',
    outlet:'mainContent'
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/filenotfound',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    ConfigComponent,
    FooterComponent,

    HeaderComponent,

    MainpageComponent,
    FileNotFoundComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    //
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    LoginModule,
    UserModule,
    AdminModule,
    QuestionsModule,
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    MainpageComponent,
    FooterComponent,
  ],
  providers: [
    QuestionsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
  ]
})
export class AppRoutingModule { }
