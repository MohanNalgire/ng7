import { Config } from './../../config/config';

export interface ConfigState{
config:Config;
}

export const initialConfigState: ConfigState={
    config:null
};