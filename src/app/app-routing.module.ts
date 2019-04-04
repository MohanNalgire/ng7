import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module'
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { QuestionsModule } from './questions/questions.module';
//Components
import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { HomeComponent } from './home/home.component';

//SErvices
import { QuestionsService } from './questions/questions.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './common/interceptors/httpconfig.interceptor';


const routes: Routes = [
 
  { 
    path: 'home', 
    component:HomeComponent 
  },
  { 
    path: 'filenotfound', 
    component:FileNotFoundComponent 
  },
  { 
    path: 'login', 
    loadChildren:'./login/login.module#LoginModule' 
  },
  { 
    path: 'users', 
    loadChildren:'./user/user.module#UserModule' 
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'/filenotfound',
    pathMatch:'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FileNotFoundComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    LoginModule, 
    UserModule,     
    AdminModule,
    QuestionsModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [ RouterModule ],
  providers:[
    QuestionsService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpConfigInterceptor, 
      multi: true
    },
  ]
})
export class AppRoutingModule { }
