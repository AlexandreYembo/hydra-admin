import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { CatalogListModule } from 'src/app/modules/catalog/catalog-list/catalog-list.module';
import { CatalogEditModule } from './modules/catalog/catalog-edit/catalog-edit.module';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    CatalogListModule,
    CatalogEditModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
