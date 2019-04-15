import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  visible:{
    'welcome':boolean,
    'signup':boolean,
    'login':boolean,
    'logout':boolean,
    'home':boolean,
    'users':boolean,
    'questions':boolean
  };

  constructor() { }



}
