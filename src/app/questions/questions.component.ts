import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { combineLatest, forkJoin } from 'rxjs';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questionsList: any;
  public combineReq;
  constructor(
    private qs: QuestionsService
  ) { }

  ngOnInit() {

    this.combineReq = forkJoin(
      this.qs.getQuestions(),
      this.qs.getQuestionTechnlogies(),
      this.qs.getQuestionUsers()
       );
    this.combineReq
      .subscribe(
        (result)=> {
          console.log('result', result);
          this.questionsList=result;
          let resultArrUpdated=result;

          resultArrUpdated[0].map(q=>
            {
              q.techIds.map(techid=>{
                resultArrUpdated[1].some(tech=>{
                  if(tech.id==techid){

                  }else{

                  }
                  console.log('tech');
                  console.log(q.techIds,techid);
                });
                console.log(resultArrUpdated[1]);
              });

            });

        },
        error => { console.error('Error for questions service subscribe.', error); },
        () => { console.info('Questions Service call compelted.'); }
      );
  }

}
