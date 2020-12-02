import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import { RouterModule } from '@angular/router';
// import { ActionsToolbarModule } from './components/actions-toolbar/actions-toolbar.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ActionsToolbarComponent } from './components/actions-toolbar/actions-toolbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ActionsToolbarComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTableModule,
    // ActionsToolbarModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ActionsToolbarComponent,
    DataTableComponent
  ]
})
export class SharedModule { }
