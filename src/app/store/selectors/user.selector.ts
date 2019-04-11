import { createSelector} from '@ngrx/store';
import { AppState } from './../state/app.state';
import { UserState } from './../state/user.state';


const SelectUsers = (state: AppState) => state.users;

export const SelectUserList = createSelector(
    SelectUsers,
    (state: UserState) => state.id
);

export const SelectSelecteduser = createSelector(
SelectUsers,
(state:UserState)=>state.firstName
);