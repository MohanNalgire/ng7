import { Config } from './../../config/config';
import { ConfigActions } from '../actions/config.actions';
import { State } from '@ngrx/store';
import { ConfigState,initialConfigState } from './../state/config.state';


export const ConfigReducers=(
    state=initialConfigState,
    action:ConfigActions
):ConfigState=>{
    switch(action.type){
        case ConfigActions.GetConfigSuccess:{
            return {
                ...state,
                config:action.payload
                };
    }
        default:
        return State;
    }
}