import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketListComponent } from './basket-list.component';
import { BasketService } from '../basket.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [BasketListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers:[BasketService],
  exports: [BasketListComponent]
})
export class BasketListModule { }
