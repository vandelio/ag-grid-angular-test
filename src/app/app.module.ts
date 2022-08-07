import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';

/// ngxs State
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/env';
import { SearchState } from './search.state';

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
  ],
})
export class AppModule {}
