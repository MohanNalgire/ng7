export interface UserState {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    permisssions:string[];
}



export const initialUserState:UserState = {
    id: null,
    username:null,
    password: null,
    firstName: null,
    lastName: null,
    token: null,
    permisssions:null
};
