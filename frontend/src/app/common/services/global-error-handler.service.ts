import { Injectable, ErrorHandler, Injector, SkipSelf } from '@angular/core';
import { Router } from "@angular/router";
import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN, NOT_FOUND } from "http-status-codes";


@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
  static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";

  constructor(private injector: Injector) { }

  handleError(error: any): void {

    let router = this.injector.get(Router);

    let httpErrorCode = error.status;
    switch (httpErrorCode) {
      case 401:
        router.navigateByUrl("/login");
        break;
      case 403:
        router.navigateByUrl("/unauthorized");
        break;
      case 400:
        this.showError(error.message);
        break;
      case 404:
        this.showError(error.message);
        break;
      default:
        this.showError(GlobalErrorHandlerService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
    }
    //router.navigate(['/error']);
  }


  private showError(message: string) {



  }
}
