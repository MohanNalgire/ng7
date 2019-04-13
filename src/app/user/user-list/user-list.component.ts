import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/user.actions';
import { User } from '../user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  public usersList: any;
  cars: User[];
  cols: any[];

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'username', header: 'Name' },
      { field: 'password', header: 'Password' },
      { field: 'token', header: 'Token' },
      { field: 'firstName', header: 'FirstName' },
      { field: 'lastName', header: 'LastName' },
      { field: 'permissions', header: 'Permisssions' }
  ];

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
