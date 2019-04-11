import { Config } from './../../config/config';
import { Action } from '@ngrx/store';



export enum ConfigActions{
    GetConfig='[config] Get Config',
    GetConfigSuccess='[config] Get Config Success',
}

export class GetConfig implements Action{
    public readonly type=ConfigActions.GetConfig;

}
export class GetConfigSuccess implements Action{
    public readonly type=ConfigActions.GetConfigSuccess;
    constructor(public payload:Config){}
}
