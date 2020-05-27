import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketListComponent } from './basket-list.component';
import { BasketService } from '../basket.service';



@NgModule({
  declarations: [BasketListComponent],
  imports: [
    CommonModule
  ],
  providers:[BasketService],
  exports: [BasketListComponent]
})
export class BasketListModule { }
