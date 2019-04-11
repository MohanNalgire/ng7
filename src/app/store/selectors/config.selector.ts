import { createSelector } from '@ngrx/store';

import { ConfigState } from './../state/config.state';
import { AppState } from './../state/app.state';




const configState = (state: AppState) => state.config;

export const sselectConfig = createSelector(
    configState,
    (state:ConfigState) => state.config
);