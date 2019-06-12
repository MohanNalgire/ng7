import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_URLS } from '../core/urls.constant';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  /*
  private url:string='http://localhost:4100/questions';
  private urlTechnologies:string='http://localhost:4100/technologies';
  private urlUsers:string='http://localhost:4100/users';
  private diffrence:string='http://localhost:4100/diffrence';s
  */

  private url:string=CUSTOM_URLS.urlQuestions;
  private urlTechnologies:string=CUSTOM_URLS.urlTechnologies;
  private urlUsers:string=CUSTOM_URLS.urlUsers;
  private diffrence:string=CUSTOM_URLS.urlDiffrence;


  constructor(private _http:HttpClient) { }

  getQuestions(){
    return this._http.get(this.url);
  }

  getQuestionTechnlogies(){
    return this._http.get(this.urlTechnologies);
  }

  getQuestionUsers(){
    return this._http.get(this.urlUsers);
  }

  getDiffrence(){
    return this._http.get(this.diffrence);
  }
}
