
import { UserState,initialUserState } from './../state/user.state';
import { State, Action } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';


export const UserReducers=(state=initialUserState,action:Action):UserState=>{
    switch(action.type){
        case UserActions.GetUser:{
            return null;
        }
        case UserActions.GetUserSuccess:{
            return null;
        }
        case UserActions.GetUsers:{
            return {
                ...state,
                users:action.payload
            };
        }
        case UserActions.GetUsersSuccess:{
            return {
                ...state,
                users:action.payload
            };
        }
        default: return state;
    }
}