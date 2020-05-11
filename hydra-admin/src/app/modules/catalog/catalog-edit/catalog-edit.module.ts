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
    MatButtonModule
  ],
  exports: [CatalogEditComponent]
})
export class CatalogEditModule { }
