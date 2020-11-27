import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { AuthComponent } from 'src/app/auth/auth.component';


import { CatalogListModule } from 'src/app/modules/catalog/catalog-list/catalog-list.module';
import { CatalogEditModule } from './modules/catalog/catalog-edit/catalog-edit.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptorService } from './auth/auth-http-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { PlaceHolderDirective } from './shared/components/placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    CatalogListModule,
    CatalogEditModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true},
    CookieService],
  bootstrap: [AppComponent]
  //For angular 9 or higher you can ommit entryComponents.
  //, entryComponents:[DataTableComponent]. In case you are using the version 8 or old one of Angular You might register the component on this place to resolve itself.
})
export class AppModule { }
