import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from '../../common/services/global.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuccessModalComponent } from "../success-modal/success-modal.component"
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-standard-sanction',
  templateUrl: './standard-sanction.component.html',
  styleUrls: ['./standard-sanction.component.css']
})
export class StandardSanctionComponent implements OnInit {
  durations: string[] = ['-1 year policy', '1 year policy', '2 year policy', '3 year policy', '4 year policy', '5+ year policy',];

  sanctionedCountries: string[] = ['Russia', 'Iraq', 'Egypt', 'Afghanistan', 'Ukraine'];

  insuranceType: string[] = ['Liability', 'Property Damage'];

  businessAreas: string[] = ['Marine', 'Transportation'];

  legalEntities: string[] = ['Willis limited', 'Tower watson limited'];

  nationalities: string[] = ['UK', 'Russia', 'Iran'];

  activityValue = 'Airport and aircraft buildings';

  insuredName = 'ABC Airline';

  insuredName1 = 'STR Airline';

  premiums: string[] = ['GBP', 'HKD'];

  claims: string[] = ['GBP', 'HKD'];

  usInvolved: number;

  policyType: string;

  fileName: string;

  isSanctionUser: boolean
  constructor(private globalservice: GlobalService, public dialog: MatDialog, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.usInvolved = 0;
    this.policyType = "New Policy";
    this.hideBUBtn = false
  }

  showInfo() {
    (<any>$('[data-toggle="popover"]')).popover({
      trigger: 'focus'
    });
  }

  preview(event) {
    console.log(event);
    // var file: string;
    // var ch='\';
    // file = event.srcElement.value;
    // this.fileName = file.substring(file.lastIndexOf('\'),file.length());
    this.fileName = event.srcElement.value;

  }


//11th jan start 

  //for form disable enable
  hideBUBtn: boolean;
  checkUser(val) {
    let param;
    this.router.params.subscribe(params => {
      param = params
    });
    if (param.user) {
      val.form.disable();
      this.hideBUBtn = true;
    }

  }

  onCancel() {
    this.route.navigate(['my-workqueue']);
    window.scrollTo(0, 0);
  }


  //<!--for sanction user-->
  isSubmitted() {
    if (this.globalservice.user.value == 'Sanction User') {
      return true
    }
    else { return false }
  }


  onSubmit() {
    const dialogRef = this.dialog.open(SuccessModalComponent, {
      width: '300px',

    });

  }


//11th jan ends
}
