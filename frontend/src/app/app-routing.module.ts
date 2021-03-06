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

//Store setup
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
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
import { SsoAuthService } from './common/services/sso-auth.service';
import { FormsModule } from '@angular/forms';
import { InterceptorProviders } from './common/interceptors/interceptors';
import { CustomHttpClientService } from './common/services/customHttpClient.service';



const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    data: {
      title: 'App',
      description: 'Description Meta Tag Content',
      ogUrl: 'your og url'
    }
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'filenotfound',
    component: FileNotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule),
    outlet: 'mainContent'
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
    RouterModule.forRoot(routes, { useHash: false }),
    FormsModule,
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
    InterceptorProviders,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    SsoAuthService

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }
