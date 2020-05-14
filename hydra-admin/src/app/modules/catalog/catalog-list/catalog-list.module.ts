import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { CatalogListComponent } from './catalog-list.component';
import { StoreModule } from '@ngrx/store';
import { DatalistReducer } from 'src/app/components/data-table/store/data-list.reducer';



@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    DataTableModule,
    StoreModule.forRoot({
      dataTable: DatalistReducer
    })
  ],
  exports:[
    CatalogListComponent
  ]
})
export class CatalogListModule { }
