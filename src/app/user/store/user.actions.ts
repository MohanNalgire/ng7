import { Action } from '@ngrx/store';
import {User} from '../user';


export enum UserActionTypes {
    LOAD_USER='[User] Load User',
    LOAD_USER_SUCCESS='[User] Load User Success',
    LOAD_USER_FAIL='[User] Load User Fail'
};



export class LoadUser implements Action {
    public readonly type=UserActionTypes.LOAD_USER;
}

export class LoadUserSuccess implements Action{
    public readonly type =UserActionTypes.LOAD_USER_SUCCESS;
    constructor(public payload:{users:any}){}
}

export class LoadUserFail implements Action{
    public readonly type = UserActionTypes.LOAD_USER_FAIL;

    constructor(public payload:string){}
}


export type Action = LoadUser|LoadUserSuccess|LoadUserFail;