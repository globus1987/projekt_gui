import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import {TestSuite} from '../../services/testsuite.models';
import { Input, Output, EventEmitter } from '@angular/core';
import { TestsuiteService } from '../../services/testsuite.service';
import { Observable } from 'rxjs';
import {MatPaginator, MatTableDataSource,MatSort, MatDialog} from '@angular/material';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-test-suite-list',
  templateUrl: './test-suite-list.component.html',
  styleUrls: ['./test-suite-list.component.css'],
  providers:[TestsuiteService]
})
export class TestSuiteListComponent implements OnInit {

  wyszukane: Observable<Array<TestSuite>>;
  displayedColumns = ['name', 'creatorUserEmail','creatorUserFirstName','creatorUserSurname','importDate','details','run','delete'];
  odcinkiTable:Array<TestSuite>;
  dataSource = new MatTableDataSource(this.odcinkiTable);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: TestsuiteService,public dialog: MatDialog) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnInit() {

    this.wyszukane=this.service.pobierz();
    console.log(this.wyszukane);
  }
  ngOnChanges(){
    this.wyszukane=this.service.pobierz();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '250px',
      data: {name: "this.name", animal: "this.animal"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}