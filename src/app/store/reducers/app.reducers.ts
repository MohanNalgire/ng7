import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './../state/app.state';
import { ConfigReducers } from './config.reducers';
import { UserReducers } from './user.reducers';
import { routerReducer } from '@ngrx/router-store';


export const appReducers: ActionReducerMap < AppState, any >= {
    router: routerReducer,
    users: UserReducers,
    config: ConfigReducers
};