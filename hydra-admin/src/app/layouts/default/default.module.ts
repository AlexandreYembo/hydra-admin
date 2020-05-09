import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
// import { RouterModule } from '@angular/router';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatDividerModule } from '@angular/material/divider';

// import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
// import { CatalogListModule } from 'src/app/modules/catalog/catalog-list/catalog-list.module';


@NgModule({
  declarations: [
    DefaultComponent,
    // DashboardComponent
    // CatalogListComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    // SharedModule,
    // CatalogListModule,
    // MatSidenavModule,
    // MatDividerModule
  ]
})
export class DefaultModule { }
