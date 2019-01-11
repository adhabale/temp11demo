import { Component ,DoCheck} from '@angular/core';
import * as _ from 'lodash';
import{GlobalService} from '../../common/services/global.service';
import { Router } from "@angular/router";
import {DialogData} from '../shared/dialog/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../shared/dialog/dialog.component';


@Component({
  selector: 'my-workqueue',
  templateUrl: './myWorkqueue.component.html',
  styleUrls: ['./myWorkqueue.component.css']
})
export class MyWorkqueueComponent implements DoCheck {
  title = 'My Task Workqueue';
  territorys: string[] = ['SMART', 'Broad'];
  workstreams: string[] = ['Standard Sanctions', 'Iran Sanctions', 'Consultancy Service', 'Controlled Goods', 'Payments',];
  sanctionCountries: string[] = ['Afghanistan', 'Belarus ', 'Cuba', 'Ukraine(Crimea)', 'Iran',];
  statusList: string[] = ['Draft', 'Submitted', 'In-Process', 'Awaiting Information', 'Approved', 'Declined', 'Amendment'];
  policytypes: string[] = ['New', 'Renewal'];
  RAGStatus: string[] = ['Green', 'Amber', 'Red'];
  country:string[]=['Afganistan','Iran','Iraq']
  businessArea:string[]=['CRB(GB)','Transportation Marin','IRR (Willis Re)'];
data:any[]=[{"id":'12345',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"date":'15-jan-2019',"assignedTo":'Avinash Yadav',"status":'In Process'},
  {"id":'23456',"workStream":'Standard Sanction',"businessArea":'CRB(GB)',"policyType":'New',"date":'15-jan-2019',"assignedTo":'Avinash Yadav',"status":'In Process'},
    {"id":'34521',"workStream":'Iran Sanction',"businessArea":'IRR',"policyType":'Renewal',"date":'25-Feb-2019',"assignedTo":'Amruta D',"status":'In Process'},
    {"id":'34521',"workStream":'Control Goods',"businessArea":'Transportation Marin',"policyType":'New',"date":'25-Feb-2019',"assignedTo":'Amruta D',"status":'In Process'}
];

tempdata:any[];
  step = 0;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  setStep() { }

  constructor(private globalService:GlobalService,private router: Router,public dialog: MatDialog){

  }
  ngOnInit(){
    this.tempdata=this.globalService.data.value;
  }

  ngDoCheck(){
this.tempdata=this.globalService.data.getValue();
  }
create(){}
name;
reasign(){
  const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
}


disableBtn(type,status){
  // console.log(type)
if(type=='New' && status=='Approved'){
 let styles = {
                // 'color': '#808080',
                // 'cursor': 'not-allowed',
                // 'opacity': '0.5',
                // 'text-decoration': 'none',
                // 'pointer-events': 'none'

                 'cursor': 'pointer',
                'color': '#000000' 
            };
              return styles;
}
            else{
              let anchor={
                // 'cursor': 'pointer',
                // 'color': '#000000' 

                'color': '#808080',
                'cursor': 'not-allowed',
                'opacity': '0.5',
                'text-decoration': 'none',
                'pointer-events': 'none'
              }
  return anchor;
            }
}
  filter(val) {
    this.tempdata=this.globalService.data.value
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return item.workStream == val;
    });
    this.tempdata = updatedData;
    this.globalService.data.next(this.tempdata)
    
  }

  reset(){
    this.tempdata=this.globalService.result.value;
   // console.log(this.tempdata)
        this.globalService.data.next(this.tempdata)
  }


  //11th jan some chnages
  navigate(val){
 // let user=this.globalService.user.value;
   let user='redirect';
console.log(val)
switch(val){
  case "Standard Sanction":{
    this.router.navigate(['standard-sanction',user]);
  };
  break;
   case "Iran Sanction":{
    this.router.navigate(['iran-sanction',user]);
  };
  break;
   case "Control Goods":{
    this.router.navigate(['controlled-goods',user]);
  };
  break;
   case "default":{
    this.router.navigate(['my-workqueue',user]);
  }
}

  }

isSanctionUser(){
  if(this.globalService.user.value=="Sanction User"){
    return true;
  }
  else{return false}
}


  checkUser(val){
if(this.globalService.user.value=='Business User' ){
val.form.disable();
}
}

//11th jan
}