
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConfigService } from './../../config/config.service';

@Injectable()
export class ConfigEffects {
    constructor(
        private _configService: ConfigService,
        _action$: Actions
    ) { }


    @Effect()
    getConfig$= this._actions.pipe();
}