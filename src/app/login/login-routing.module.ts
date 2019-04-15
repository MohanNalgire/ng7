import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  declarations:[
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
