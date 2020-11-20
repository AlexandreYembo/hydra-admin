import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsToolbarModule } from 'src/app/components/actions-toolbar/actions-toolbar.module';
import { MatDividerModule } from '@angular/material/divider';
import { CatalogEditComponent } from './catalog-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { CategoryModule } from '../category/category.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';
import { CategoryService } from '../category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [CatalogEditComponent],
  imports: [
    CommonModule,
    ActionsToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DataTableModule,
    CategoryModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers:[DataTableComponent, CategoryService],
  exports: [CatalogEditComponent]
})
export class CatalogEditModule { }
