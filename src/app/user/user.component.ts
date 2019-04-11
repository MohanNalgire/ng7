import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/user.reducer';
import * as fromUser from './store/user.reducer';
import * as userActions from './store/user.actions';
import * as fromUserSelector from './store/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  private usersList$: any;

  constructor(private _store: Store<fromUser.AppState>, private _us: UserService) { }

  ngOnInit() {
    this.displayUserData();
  }

  displayUserData() {
    this._store.dispatch(new userActions.LoadUser());
    this.usersList$ = this._store.pipe(select(fromUserSelector.getUsers));
  }

}
