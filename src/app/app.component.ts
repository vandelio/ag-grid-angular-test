import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  ColumnApi,
  ColumnResizedEvent,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';

import { ICarData } from './interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'company' },
    { field: 'email' },
    { field: 'phone' },
    { field: 'age' },
    {
      field: 'about',
      resizable: true,
      minWidth: 200,
      maxWidth: 500,
    },
    {
      headerName: 'Friend count', // Specific column name, when doing custom change on specific column value
      field: 'friends', // Object property and source of data
      valueFormatter: this.friendsFormatter, // Formatting displayed value
    },
  ];
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  public rowData!: ICarData[];
  //rowData: any = [];

  //for accesing the grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  // On grid ready we get and then assign the response data to the variable used in the chart
  onGridReady(params: GridReadyEvent<ICarData>) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
      .get<ICarData[]>(
        'https://ag-grid-angular-hello-world-bwvk8k.stackblitz.io/assets/cardata.json'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  /// Resize columns functions
  autoSizeAll(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  friendsFormatter(params) {
    return params.value.length;
  }
}
