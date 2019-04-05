import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { LoginModule } from './login/login.module'
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';


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
    path: 'dashboard', 
    loadChildren:'./dashboard/dashboard.module#DashboardModule' 
  },
  {
    path: '',
    redirectTo:'/filenotfound',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'/filenotfound',
    pathMatch:'full'
  }
];


@NgModule({
  declarations: [],
  imports: [LoginModule, UserModule, DashboardModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
