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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { CatalogListModule } from 'src/app/modules/catalog/catalog-list/catalog-list.module';
import { CatalogEditModule } from './modules/catalog/catalog-edit/catalog-edit.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthGuard } from './core/authentication/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthCallbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    CatalogListModule,
    CatalogEditModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers:[ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
