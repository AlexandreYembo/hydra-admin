import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { HttpClientModule } from '@angular/common/http';
import { PlaceHolderDirective } from './shared/components/placeholder/placeholder.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogModule } from './catalog/catalog.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    CatalogModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
  //For angular 9 or higher you can ommit entryComponents.
  //, entryComponents:[DataTableComponent]. In case you are using the version 8 or old one of Angular You might register the component on this place to resolve itself.
})
export class AppModule { }
