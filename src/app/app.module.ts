import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { MenuComponent } from './src/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material';
import { TestSuiteListComponent } from './src/test-suite-list/test-suite-list.component';
import { TestsuiteService } from './services/testsuite.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DetailsComponent } from './src/details/details.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestSuiteListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule
  ],
  entryComponents:[ TestSuiteListComponent,DetailsComponent ],
  providers: [TestsuiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
