import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions/questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public questions:Array<any>;
  constructor(private qt:QuestionsService) { }

  ngOnInit() {
    this.getQuestionList();
  }

  getQuestionList(){
    this.qt.getQuestions()
    .subscribe(
      next=>{
        console.log("Question service data",next);
      },
      error=>{
        console.error("Question service::",error);
      },
      ()=>{
        console.info('Completed questions service.');
      }
      );
  };
}
