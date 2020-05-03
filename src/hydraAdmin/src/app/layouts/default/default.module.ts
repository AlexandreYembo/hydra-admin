import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { ProductCatalogComponent } from 'src/app/modules/product-catalog/product-catalog.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductCatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
