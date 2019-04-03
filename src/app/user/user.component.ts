import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  private usersList:any;

  constructor(private _us: UserService ) { }

  ngOnInit() {
    this.displayUserData();
  }

  displayUserData(){
console.log("displayUserData() called ")
    this._us.getUser().subscribe(
      res=>{
      console.log("list ", res);
      this.usersList = res;
      },
      err=>{
        console.log("Error ");
      },
      ()=>{ console.log("Completed "); }


  );
  }

}
