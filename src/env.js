(function (window) {
/**
 *    Created by      :
 *    Created on      :
 *    Modified by     :
 *    Modified on     :
 *
 *    @reason         :
 *                      Limitation 1: Every environment requires a separate build
 *                      Limitation 2: The application config is part of the application code
 *                      Limitation 3: Not flexible enough for dynamic cloud solutions
 *    @reference      :
 *                      https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/
 *                      https://12factor.net/
 *
 *
 *
 */
  window.__env = window.__env || {};
  // API url
  window.__env.apiUrl = 'http://dev.your-api.com';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;



  /*
  {
    "href": "http://127.0.0.1:5500/home",
    "ancestorOrigins": {},
    "origin": "http://127.0.0.1:5500",
    "protocol": "http:",
    "host": "127.0.0.1:5500",
    "hostname": "127.0.0.1",
    "port": "5500",
    "pathname": "/home",
    "search": "",
    "hash": ""
  }
  */

  var prod = [];
  var test = [];
  var stag = [];
  var dev = [];

  fetch('http://localhost:3000/env')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      myJson.forEach(element => {
        switch (true) {
          case (element.title == 'prod'):
            prod = element;
            break;
          case (element.title == 'test'):
            test = element;
            break;
          case (element.title == 'stag'):
            stag = element;
            break;
          case (element.title == 'dev'):
            dev = element;
            break;
          default:
            dev = element;
        }
      });

      window.__env.production = [];
      window.__env.testing = [];
      window.__env.staging = [];;
      window.__env.development = [];

      var serverDetails = window.location;
      var hostDetails = serverDetails.hostname;
      var port = serverDetails.port;
      var protocol = serverDetails.protocol;

      switch (hostDetails) {
        case "production":
          if (hostDetails && port === '8000' && protocol === 'http') {
            window.__env.production = prod;
          }
          break;
        case "testing":
          if (hostDetails && port === '8000' && protocol === 'http') {
            window.__env.testing = test;
          }
          break;
        case "staging":
          if (hostDetails && port === '8000' && protocol === 'http') {
            window.__env.staging = stag;
          }
          break;
        case "localhost": //development
          if (hostDetails && port === '4200') {
            window.__env.development = dev;
          }
          break;
        default:
          if (hostDetails && port === '4200') {
            window.__env.development = dev;
          }

      }



    })
    .catch(error => console.error(error));

    console.log('window', window.__env);

}(this));
