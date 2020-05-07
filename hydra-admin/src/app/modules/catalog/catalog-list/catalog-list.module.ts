import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { CatalogListComponent } from './catalog-list.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    DataTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports:[
    CatalogListComponent
  ]
})
export class CatalogListModule { }
