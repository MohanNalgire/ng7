import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  visible:{
    'welcome':false,
    'signup':true,
    'login':false,
    'home':false,
    'users':false,
  };

  constructor() { }



}
