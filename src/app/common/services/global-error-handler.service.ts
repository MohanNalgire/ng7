import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from "@angular/router";
import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN, NOT_FOUND } from "http-status-codes";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
  static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";

  constructor(private injector: Injector, private toastrService: ToastrService) { }

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
    debugger
    this.toastrService.error(message, GlobalErrorHandlerService.DEFAULT_ERROR_TITLE, {
      timeOut: 0,
      extendedTimeOut: 100,
      tapToDismiss: true,
      disableTimeOut: false,
      positionClass: "toast-top-center"
    });

  }
}
