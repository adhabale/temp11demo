import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {

 
  constructor(
    public dialogRef: MatDialogRef<SuccessModalComponent>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
