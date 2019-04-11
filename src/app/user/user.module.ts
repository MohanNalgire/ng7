import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
//Store
import { UserReducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { userEffects } from './store/user.effects';
@NgModule({
  declarations: [UserComponent, UserAddComponent, UserEditComponent, UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('users',UserReducer),
    EffectsModule.forFeature([userEffects])
  ],
  providers:[UserService]
})
export class UserModule { }
