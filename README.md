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


##  12  Testing
    Testing types
1   isolated testing
        `An isolated test only focuses on the component’s class.`
        -   want to test its (complex) logic above all, we don’t want to focus on its template.


2   shallow testing
        `The shadow test focuses on the component’s class and its template, without its dependencies by mocking them.`
        -   want to test its own template with the class logic. By doing so, we will mock all        the other components that are part of the template.

3   integrated testing
    `An integrated test will test the component and its dependencies as a whole.`
    -   want to test its class logic, its template and all its        dependencies.


### Reference   :
1   [Angular testing](https://medium.com/@bencabanes/angular-component-testing-with-examples-7c52b2b7035e)



##  13  Log
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