import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  name:'production',
  production: true,


apiUrl: 'http://api.myservice.com/api/', // Replace with remote API
logLevel: NgxLoggerLevel.OFF,
serverLogLevel: NgxLoggerLevel.ERROR

};
