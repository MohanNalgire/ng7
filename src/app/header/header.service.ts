import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  visible: boolean;

  constructor() { }

  show() {
    return this.visible = true;
  }

  hide() {
    return this.visible = false;
  }

  toggle() {
    return this.visible = !this.visible;
  }

}
