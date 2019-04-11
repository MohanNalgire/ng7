import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public usersList: any;

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    console.log(new UserActions.LoadUser());
    this._store.dispatch(new UserActions.LoadUser);
    this._store.subscribe(
      state => {
        this.usersList = state.users.users;
      },
      error => {
        console.error('Error', error);
      }
      ,
      () => {
        console.info("Loaded users.");
      }
    );
  }

}
