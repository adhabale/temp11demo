import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  country:string[]=['Russia','Afganistan','Iran','Iraq']
  currency:string[]=['USD','RGB','INR','GBP']

  constructor() { }

  ngOnInit() {
  }

}
