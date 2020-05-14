import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { combineLatest, forkJoin } from 'rxjs';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questionsList: any;
  public combineReq;
  public diffData:any;
  logs: Object;
  differencequestion:string='';
  diffHeaders: Object;
  constructor(
    private qs: QuestionsService
  ) { }

  ngOnInit() {
    this.diffTable();
    this.logger();
  }


  diffTable(){
    let id=1;
    let result$=forkJoin(
      this.qs.getQuestion(id),
      this.qs.getDiffrenceHeads(id),
      this.qs.getDiffrence(id)
    );

    result$.subscribe(
      data => {
        console.log('Result of the diffrrence service', data);
        this.differencequestion=data[0][0].question;
        this.diffHeaders = data[1][0];
        this.diffData = data[2];
      },
      error => { console.error('Error in the diffrence service.', error); },
      () => { console.info('Complete diffrence service.'); }
    );
    console.log('test this',);
  }

  logger(){
    this.qs.getLogger()
    .subscribe(
      data=>{
        this.logs=data;
      },
      error=>{
        console.log('Logs data', error);
      },
      ()=>{}
    );
  }

}
