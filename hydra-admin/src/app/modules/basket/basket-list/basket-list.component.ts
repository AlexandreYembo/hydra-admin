import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BasketModel } from 'src/app/models/basket-model';
import { BasketService } from '../basket.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {
  items: BasketModel;
  isEmpty: boolean;
  priceBasket: number
  @Output()updateTotalBasket = new EventEmitter<number>();
  constructor(public basketService: BasketService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isEmpty = true;

    this.basketService.checkBasketUpdated((result) => {
      var basket = JSON.parse(result);
      this.items = basket.Items;
      this.isEmpty = this.items === null;
      this.priceBasket = basket.Total;
      this.updateTotalBasket.emit(basket.Qty);

      this._snackBar.open('Basket updated!', '', {
        duration: 3000,
      });
    });
  }
}
