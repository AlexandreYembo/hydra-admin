import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './catalog-list.component';
import { CatalogService } from '../catalog.service';
import { DataTableModule } from 'src/app/shared/components/data-table/data-table.module';

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
