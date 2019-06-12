import { Store,createSelector,createFeatureSelector, State } from '@ngrx/store';
import { UserState } from './user.reducer';



const getUserFeatureState = createFeatureSelector<UserState>("users");



export const getUsers =createSelector(
getUserFeatureState,
(state:UserState)=>state.users
);

export const getUsersLoading=createSelector(
    getUserFeatureState,
    (state:UserState)=>state.loading
);

export const getUserLoaded=createSelector(
    getUserFeatureState,
    (state:UserState)=>state.loaded
);

export const getUserErrir=createSelector(
    getUserFeatureState,
    (state:UserState)=>state.error
);