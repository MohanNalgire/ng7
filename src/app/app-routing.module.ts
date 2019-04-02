import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { LoginModule } from './login/login.module'
import { HomeComponent } from './home/home.component';


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
  imports: [LoginModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
