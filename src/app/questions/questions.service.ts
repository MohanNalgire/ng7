import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private url:string='http://localhost:3000/questions';
  private urlTechnologies:string='http://localhost:3000/technologies';
  private urlUsers:string='http://localhost:3000/users';
  private diffrence:string='http://localhost:3000/diffrence';

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
