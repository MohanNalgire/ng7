import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module'
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { QuestionsModule } from './questions/questions.module';
//Components

import { FileNotFoundComponent } from './common/component/file-not-found/file-not-found.component';
import { HomeComponent } from './common/component/home/home.component';

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
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { ConfigComponent } from './config/config.component';
import { MainpageComponent } from './common/component/mainpage/mainpage.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './common/component/welcome/welcome.component';
import { AuthGuard } from './common/guards/auth.guard';
import { SidebarComponent } from './common/component/sidebar/sidebar.component';
import { ErrorComponent } from './common/component/error/error.component';
import { GlobalErrorHandlerService } from './common/services/global-error-handler.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = [
  {
    path:'app',
    component:AppComponent,
    data: {
      title: 'App',
      description:'Description Meta Tag Content',
      ogUrl: 'your og url'
    }
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'filenotfound',
    component: FileNotFoundComponent
  },
  {
    path:'error',
    component:ErrorComponent
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'questions',
    loadChildren: './questions/questions.module#QuestionsModule',
    outlet:'mainContent'
  },
  {
    path: '',
    redirectTo: '/welcome',
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
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    FileNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    RouterModule.forRoot(routes,{useHash: true}),
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
    ConfigComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    FileNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    SidebarComponent,


    RouterModule,

  ],
  providers: [
    QuestionsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService},

  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }
