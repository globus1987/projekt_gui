import { Component, OnInit } from '@angular/core';
import { TestsuiteService } from '../../services/testsuite.service';
import { TestSuiteListComponent } from '../test-suite-list/test-suite-list.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[TestsuiteService]
})
export class MenuComponent implements OnInit {

  constructor(private service: TestsuiteService) { }

  ngOnInit() {
  }

  usun(){
    this.service.usun();
    
    console.log("usunieto")

  }
}
