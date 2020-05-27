import { BasketItemModel } from './basket-item-model';

export class BasketModel {
    public id: number;
    public productId: number;
    public qty: number;
    public items: BasketItemModel[];
}