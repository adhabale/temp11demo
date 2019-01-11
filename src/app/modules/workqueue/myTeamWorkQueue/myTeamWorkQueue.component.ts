import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from "@angular/router";
import{GlobalService} from "../../common/services/global.service";

@Component({
  selector: 'app-my-team-work-queue',
  templateUrl: './myTeamWorkQueue.component.html',
  styleUrls: ['./myTeamWorkQueue.component.css']
})
export class MyTeamWorkQueueComponent implements OnInit {
  title = 'My Task Workqueue';
  territorys: string[] = ['SMART', 'Broad'];
  workstreams: string[] = ['Standard Sanctions', 'Iran Sanctions', 'Consultancy Service', 'Controlled Goods', 'Payments',];
  sanctionCountries: string[] = ['Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran',];
  statusList: string[] = ['Draft', 'Submitted', 'In-Process', 'Awaiting Information', 'Approved', 'Declined', 'Amendment'];
  policytypes: string[] = ['New', 'Renewal'];
  RAGStatus: string[] = ['Green', 'Amber', 'Red'];
  businessArea:string[]=['CRB(GB)','Transportation Marin','IRR (Willis Re)'];
data:any[]=[{"id":'12345',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
  {"id":'23456',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
    {"id":'34521',"workStream":'Iran Sanction',"businessArea":'IRR',"policyType":'Renewal',"country":'Afganistan;Pakistan;Iran',"status":'In Process'},
    {"id":'34521',"workStream":'Control Goods',"businessArea":'Transportation Marin',"policyType":'New',"country":'Afganistan;Pakistan;Iran',"status":'In Process'}
];

constructor(private router: Router,private globalservice:GlobalService){

}
tempdata:any[];
  step = 0;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  ngOnInit(){
    this.tempdata=this.data
  }

  filter(val) {
    this.tempdata=this.data;
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return item.workStream == val;
    });
    this.tempdata = updatedData
  }

   navigate(val){
console.log(val)
switch(val){
  case "Standard Sanction":{
  this.router.navigate(['standard-sanction']);
  };
  break;
   case "Iran Sanction":{
    this.router.navigate(['iran-sanction']);
  };
  break;
   case "Control Goods":{
    this.router.navigate(['controlled-goods']);
  };
  break;
   case "default":{
    this.router.navigate(['my-workqueue']);
  }
}

  }


}
