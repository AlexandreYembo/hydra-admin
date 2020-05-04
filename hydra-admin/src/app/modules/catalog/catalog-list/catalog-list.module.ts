import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { CatalogListComponent } from './catalog-list.component';


@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    DataTableModule
  ],
  exports:[
    CatalogListComponent
  ]
})
export class CatalogListModule { }
