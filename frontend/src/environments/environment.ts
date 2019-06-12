import { NgxLoggerLevel } from 'ngx-logger';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name:'default',

  apiUrl: 'http://localhost:68552/', // Replace with local API
  logLevel: NgxLoggerLevel.WARN,
  serverLogLevel: NgxLoggerLevel.OFF,


  auth: {
    clientID: 'hYqizA4QzlmWT99f0F57sO7mj80CjKBG',
    domain: 'dev--ymm8kx2.auth0.com', // e.g., you.auth0.com
    audience: 'YOUR-AUTH0-API-IDENTIFIER', // e.g., http://localhost:3001
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  }


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
