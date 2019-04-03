import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
