import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket-model';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {
  items: BasketModel;
  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.checkBasketUpdated((result) => {
      this.items = JSON.parse(result).Items;
    });
  }

}
