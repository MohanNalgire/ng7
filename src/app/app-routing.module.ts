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
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './common/guards/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';


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
