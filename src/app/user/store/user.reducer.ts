import * as UserActions from './user.actions';
import { User } from '../user';
import * as fromRoot from '../../store/app.state';

export interface UserState {

    users: User[]|{},
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    users: UserState;
}

export const initialUserState: UserState = {
    users: [],
    loading: false,
    loaded: false,
    error: ''
};

export function UserReducer(
    state = initialUserState,
    action: UserActions.Action
): UserState {
    switch (action.type) {
        case UserActions.UserActionTypes.LOAD_USER:
            {
                return {
                    ...state,
                    loading: true
                };
            }
        case UserActions.UserActionTypes.LOAD_USER_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    users: action.payload
                };
            }
        case UserActions.UserActionTypes.LOAD_USER_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
                users: [],
                error: action.payload

            };
        }
        default:
            return state;
    }
}
