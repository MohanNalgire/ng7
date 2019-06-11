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
  public diffData:any;
  constructor(
    private qs: QuestionsService
  ) { }

  ngOnInit() {
    this.diffTable();
    /*

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
      ); */
  }


  diffTable(){
    this.qs.getDiffrence()
    .subscribe(
      data=>{console.log('Result of the diffrrence service',data);
    this.diffData=data;},
      error=>{console.error('Error in the diffrence service.',error);},
      ()=>{console.info('Complete diffrence service.');}
    );
    console.log('test this',);
  }

}
