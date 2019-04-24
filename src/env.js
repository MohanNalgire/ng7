(function (window) {
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

  prod = [];
  test = [];
  stag = [];;
  dev= [1, 2, 3, 4, 5, 6, 7, 8];

  window.__env.production = [];
  window.__env.testing = [];
  window.__env.staging = [];;
  window.__env.development = [];

  var serverDetails = window.location;
  var hostDetails = serverDetails.hostname;
  var port =serverDetails.port;
  var protocol=serverDetails.protocol;

  switch (hostDetails) {
    case "production":
      if (hostDetails && port === '8000' && protocol==='http') {
        window.__env.production = prod;
      }
      break;
    case "testing":
      if (hostDetails && port === '8000' && protocol==='http') {
        window.__env.testing = test;
      }
      break;
    case "staging":
      if (hostDetails && port === '8000' && protocol==='http') {
        window.__env.staging = stag;
      }
      break;
    case "localhost"://development
      if (hostDetails && port ==='4200') {
        window.__env.development = dev;
      }
      break;
    default:
      if (hostDetails && port === '4200') {
        window.__env.development = dev;
      }

  }

  console.log('window',serverDetails, window.__env);
}(this));
