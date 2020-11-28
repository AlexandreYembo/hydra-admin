import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { CatalogListComponent } from './catalog-list.component';
import { CatalogService } from '../catalog.service';

@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    DataTableModule
  ],
  providers:[CatalogService],
  exports:[
    CatalogListComponent
  ]
})
export class CatalogListModule { }
