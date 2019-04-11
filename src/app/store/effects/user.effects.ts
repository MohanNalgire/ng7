import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { UserService } from './../../user/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

import {
    UserActions,
    GetUser,
    GetUserSuccess,
    GetUsers,
    GetUsersSuccess
} from './../actions/user.actions';
import { withLatestFrom, map, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class UserEffects {

    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<AppState>
    ) { }

    @Effect()
    getuser$ = this._actions$.pipe(
        ofType<GetUser>(UserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id,users]) => {
            const selectedUser = users.filter(user =>user.id=== +id[0]);
            return of(new GetUserSuccess(selectedUser));
            });
        })
    );

}