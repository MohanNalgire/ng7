import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

//rxjs
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from "rxjs/operators";
import * as UserActions from './user.actions';


@Injectable()

export class userEffects {

    constructor(
        private _action$: Actions,
        private _userService: UserService
    ) { }

    @Effect()
    loadUser$: Observable<Action> = this._action$.pipe(
        ofType<UserActions.LoadUser>(UserActions.UserActionTypes.LOAD_USER),
        mergeMap(
            (action: UserActions.LoadUser) => {
                return this._userService.getUser().pipe(
                    map(
                        (users: any) => {
                            return new UserActions.LoadUserSuccess(users);
                        }
                    ),
                    catchError(err => {
                        return of(new UserActions.LoadUserFail(err));
                    })
                );
            }
        )
    );
}