import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_URLS } from '../core/urls.constant';
import { CustomHttpClientService } from '../common/services/customHttpClient.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private urlQuestions:string=CUSTOM_URLS.urlQuestions;
  private urlTechnologies:string=CUSTOM_URLS.urlTechnologies;
  private urlUsers:string=CUSTOM_URLS.urlUsers;
  private diffrence:string=CUSTOM_URLS.urlDiffrence;
  private diffrenceHeaders:string=CUSTOM_URLS.urlDiffrenceHeaders;
  private logger:string=CUSTOM_URLS.urlLogger;

  constructor(private _http:CustomHttpClientService) { }

  getQuestions(){
    return this._http.getCall(this.urlQuestions);
  }
  getQuestion(id){
    return this._http.getCall(`${this.urlQuestions}?id=${id}`);
  }

  getQuestionTechnlogies(){
    return this._http.getCall(this.urlTechnologies);
  }

  getQuestionUsers(){
    return this._http.getCall(this.urlUsers);
  }

  getDiffrenceHeads(id){
    return this._http.getCall(`${this.diffrenceHeaders}?id=${id}`);
  }

  getDiffrence(id){
    return this._http.getCall(`${this.diffrence}?id=${id}`);
  }

  getLogger(){
    return this._http.getCall(this.logger);
  }
}
