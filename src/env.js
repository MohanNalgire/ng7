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
window.__env.production=[];
window.__env.testing=[];
window.__env.staging=[];;
window.__env.development=[];

var serverDetails=window.location;
var hostDetails=serverDetails.hostname;
switch(hostDetails){
    case  "production":
        if(hostDetails && port===8000){

        }
    break;
    case "testing":break;
    case "staging":break;
    case "development":break;
    default: null;
}

  }(this));