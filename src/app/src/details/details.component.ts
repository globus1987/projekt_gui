import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TestSuiteListComponent } from '../test-suite-list/test-suite-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 
  constructor(    public dialogRef: MatDialogRef<DetailsComponent>)
  {

  }
   
  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
