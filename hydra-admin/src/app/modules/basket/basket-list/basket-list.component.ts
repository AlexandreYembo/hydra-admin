import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BasketModel } from 'src/app/models/basket-model';
import { BasketService } from '../basket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {
  basket: BasketModel;
  processing: boolean = false;
  @Output()updateTotalBasket = new EventEmitter<number>();
  constructor(public basketService: BasketService, 
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.basketService.getBasket((result) => {

      if(result != null){
        this.basket = result;
        this.updateTotalBasket.emit(this.basket.totalQty);
      }
      else{
        this.basket = null;
        this.updateTotalBasket.emit(0);
      }
    });
  }
  
  deleteBasket(){
    this.processing = true;
      this.basketService.deleteBasket((result) => {
        this.processing = false;
        this._snackBar.open('Basket deleted!', '', {
          duration: 3000,
        });
        this.basket = result;
      });
  }
  updateItem(event: Event, id: Guid){
      let qty = +(<HTMLInputElement>event.target).value;
      this.basket.items.filter(m => m.id == id).map(r => r.qty = qty);
      
  }

  updateBasket(){
    this.processing = true;
    this.basketService.updateBasket(this.basket, (result => {
      this.processing = false;
      this._snackBar.open('Basket updated!', '', {
        duration: 3000,
      });

      this.basket = result;
    }));
  }
}
