#       Concept Project

##      This is concept project where we check solutions for project base concepts.
##      Here you get multiple solutions for on concept with different structure.



# Ng7project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).











# What is used?


## 1    Module Base architecture.
## 2    Lazy loading module
## 3    Dynamic Environment settings
## 4    Interceptor on each service.
## 5    Fake json server -> json-server
## 6    RXJs
## 7    State management(NgRx Store)
## 8    UI components(PrimeNg)
## 9    Providers(User defined factory function and constatns)
## 10   SEO friendly application
## 11   Toastr
## 12   Testing
## 13   Angular Application Log
## 14   Server-side Rendering (SSR- Angular Universal)
## 15   Single sign on
## 16   Setting base href dynamically
## 17   Using HTML code as service response to show in component



#Details
## 1    Module Base architecture.

## 2    Lazy loading module

## 3    Dynamic Environment settings
### Reference :
1   [Demo example](https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/)
    Or
2   [Runtime configuration Demo1](https://juristr.com/blog/2018/01/ng-app-runtime-config/#runtime-configuration)
3   [Runtime configuration Demo1](https://www.tektutorialshub.com/angular/angular-runtime-configuration/#loading-the-runtime-configuration)


## 4    Interceptor on each service.
###     Features
1       URL manipulation
2       Response conversion
3       Loader effect
4       Headers management
5       Notifications
6       Errors
7       Profiling (logs, time logs )
8       Fake backend
9       Caching
10      Authentication(Api checking for authentication)
        1       Add bearer token
        2       Refresh Token
        3       Redirect to the login page
### Reference :
[Top 10 ways to use Interceptors in Angular](https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6)
### 1   Interceptor on requiest handling
### 2   Interceptor on response handling

## 5    Fake json server -> json-server

## 6    RXJs
### Reference :
1   [RxJS guide](https://www.learnrxjs.io/)


## 7    State management(NgRx Store)
### Reference :
1   [NgRx guide](https://ngrx.io/)
2   [Angular university](https://blog.angular-university.io/angular-ngrx-store-and-effects-crash-course/)

## 8    UI components
### Reference :
1   [Prime ng and prime faces](https://www.primefaces.org/primeng/#/)

angular.json file add styles array

```
"node_modules/primeng/resources/themes/nova-light/theme.css",
"node_modules/primeng/resources/primeng.min.css",
"node_modules/primeng/resources/themes/darkness/theme.css"
```

## 9    Providers(User defined factory function and constatns)

## 10   SEO friendly application
### Reference :
1   [Concreatepage site](https://www.concretepage.com/angular/angular-meta-service-for-meta-tags)
2   [Angular Api guide](https://angular.io/api/platform-browser/MetaDefinition)
3   [Angular Api Meta tag](https://angular.io/api/platform-browser/Meta)
4   [Alligator site](https://alligator.io/angular/meta-tags/)

##  11  Toastr
### Reference :
1   [ngx-toastr](https://scttcper.github.io/ngx-toastr/)
2   [ngx-toastr example](https://www.jsdelivr.com/package/npm/ngx-toastr)
3   [ngx-toastr custom](https://stackblitz.com/edit/ngx-toastr-custom?file=app%2Fcustom-toast%2Fcustom-toast.component.ts)


## 12  Testing
    Testing types
1   isolated testing(Unit testing)
        `An isolated test only focuses on the component’s class.`
        -   want to test its (complex) logic above all, we don’t want to focus on its template.


2   shallow testing
        `The shadow test focuses on the component’s class and its template, without its dependencies by mocking them.`
        -   want to test its own template with the class logic. By doing so, we will mock all        the other components that are part of the template.

3   integrated testing
    `An integrated test will test the component and its dependencies as a whole.`
    -   want to test its class logic, its template and all its dependencies.


### Reference   :
1   [Angular Unit Testing](https://codecraft.tv/courses/angular/unit-testing/overview/)
1   [Angular testing](https://medium.com/@bencabanes/angular-component-testing-with-examples-7c52b2b7035e)



## 13  Angular Application Log
###     Features
1       Environment Specific Logging in Angular
2       Pretty printing to the console
3       Enable logging based on the level specified
4       Control log level based on the current environment
5       Send log messages to server via HTTP for centralised logging
6       Indicates log location and line number
### Reference   :
1       [Angular log](https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications)
2       [Ngx logger example1](https://onthecode.co.uk/angular-logging-made-easy-with-ngx-logger/)
3       [Ngx logger example2](https://medium.com/@ahmedhamedTN/enable-disable-angular-logging-based-on-production-environment-using-ngxlogger-dee531fb8374)
4       [ngx-logger example3](https://onthecode.co.uk/angular-logging-made-easy-with-ngx-logger/)


## 14   Server-side Rendering (SSR- Angular Universal) -Working On


### Reference   :
####    How to create server side app
`ng add @nguniversal/express-engine --clientProject angular.io-example` or
`npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader @nguniversal/express-engine`

####    How to run
`npm run build:ssr && npm run serve:ssr`
1       [Angular Universal: a Complete Practical Guide](https://blog.angular-university.io/angular-universal/)
2       [Angular Universal Guide](https://angular.io/guide/universal)
3       [Aligator - Angular Universal](https://alligator.io/angular/angular-universal/)
4       [HOW TO CREATE AN ANGULAR APPLICATION WITH SERVER-SIDE RENDERING?](https://blog.savoirfairelinux.com/en-ca/2017/angular-app-with-server-side-rendering/)


## 15 Single sign on



### Reference   :

1       [Simple single sign on Alligator](https://alligator.io/angular/authentication-auth0/)


##      Authentication and authorization protocols Auth0 supports(Identity protocols)
        Common and popular identity protocols
        1       OAuth 2.0
        2       OpenID Connect
        Enterprise deployments
        3       SAML
        4       WS-Fed
        5       LDAP

1       [auth0.js library documentation](https://auth0.github.io/auth0.js/index.html)
2       [OAuth 2.0](https://auth0.com/docs/api/authentication?http#login)


## 15   Setting base href dynamically


### Reference   :

1       [Simple single sign on Alligator](https://stackoverflow.com/questions/38112891/angular-2-4-5-set-base-href-dynamically)


### Not implemented
##      Using HTML code from service response 
How to include the HTML code in angular template with code security
Angular 2, DomSanitizer, bypassSecurityTrustHtml, SVG

### Reference   :
https://stackoverflow.com/questions/39857858/angular-2-domsanitizer-bypasssecuritytrusthtml-svg
https://stackoverflow.com/questions/49832358/angular-5-how-to-insert-a-string-as-a-html-element
https://angular.io/api/platform-browser/DomSanitizer
https://forum.ionicframework.com/t/inserting-html-via-angular-2-use-of-domsanitizationservice-bypasssecuritytrusthtml/62562
https://www.oodlestechnologies.com/blogs/How-To-Display-Dynamic-HTML-Without-Sanitizing-Or-Filtering-Using-Pipe/

