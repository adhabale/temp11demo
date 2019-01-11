import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import{GlobalService} from '../services/global.service';
import * as _ from 'lodash';
import { Router } from "@angular/router";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: string;
  tempdata;
  currentUser;
  constructor(private translate: TranslateService,private globalService:GlobalService,private router: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {

//11th jan
    this.currentUser=this.globalService.user.value

    this.language = "English";
  }

  useLanguage(language: string,selectedLang:string) {
    this.translate.use(language);
    this.language = selectedLang;
  }

filter(val) {
    this.tempdata=this.globalService.result.value
    let updatedData = _.filter(this.tempdata, (item: any) => {
      return item.workStream == val;
    });
    this.tempdata = updatedData;
    this.globalService.data.next(this.tempdata)

    if(this.router.url!="my-workqueue"){
this.router.navigate(['my-workqueue'])
  }
  }

//11th jan
  selectUser(val){
    this.globalService.user.next(val)
console.log( this.globalService.user.value);
this.currentUser=this.globalService.user.value;
  }

}
