import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import { DataTableComponent } from './data-table.component';
import { MatIconModule } from '@angular/material/icon';
import { ActionsToolbarModule } from '../actions-toolbar/actions-toolbar.module';
import { StoreModule } from '@ngrx/store';
import { DataSourceReducer } from './store/data-list.reducer';


@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTableModule,
    ActionsToolbarModule,
    StoreModule.forRoot({
      dataSource: DataSourceReducer
      //dataTable: DatalistReducer
    })
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
