import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { CatalogListComponent } from './catalog-list.component';
import { StoreModule, Store } from '@ngrx/store';
import { CatalogListFacade } from '../catalog-store';
import { SharedStore } from 'src/app/store/shared-store';
import { CatalogService } from '../catalog.service';

@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    DataTableModule,
    StoreModule.forRoot({
      catalogy: CatalogListFacade
    })
  ],
  providers:[Store, SharedStore, CatalogService],
  exports:[
    CatalogListComponent
  ]
})
export class CatalogListModule { }
