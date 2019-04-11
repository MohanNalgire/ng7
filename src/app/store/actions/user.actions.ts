import { Action } from '@ngrx/store';
import { User } from './../../user/user';

export enum UserActions {
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success'
}
export class GetUser implements Action {
    public readonly type = UserActions.GetUser;
    constructor(public payload: number) { }
}
export class GetUserSuccess implements Action {
    public readonly type = UserActions.GetUserSuccess;
    constructor(public payload: User) { }
}

export class GetUsers implements Action {
    public readonly type = UserActions.GetUsers;

}

export class GetUsersSuccess implements Action {
    public readonly type = UserActions.GetUsersSuccess;
    constructor(public payload: User) { }
}




