import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private url='http://localhost:3000/questions';
  constructor(private _http:HttpClient) { }

  getQuestions(){
    return this._http.get(this.url);
  }


}
