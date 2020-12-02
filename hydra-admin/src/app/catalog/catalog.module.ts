import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { CatalogEditComponent } from './catalog-edit/catalog-edit.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogService } from './catalog.service';
import { CatalogRoutingModule } from './catalog-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        CatalogListComponent,
        CatalogEditComponent
    ],
    imports: [
        CatalogRoutingModule,
        CommonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        SharedModule
    ],
    providers:[CatalogService]
   
})
export class CatalogModule { }