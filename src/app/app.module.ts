import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
/// ngxs State
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/env';
import { SearchState } from './search.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/// Components
import { AppComponent } from './app.component';
import {MaterialExampleModule} from '../material.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AgGridModule,
    NgxsModule.forRoot([SearchState], {
      developmentMode: !environment.production
    }),
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
})
export class AppModule {}
