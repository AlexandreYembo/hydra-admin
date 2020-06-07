import { BasketItemModel } from './basket-item-model';
import { Guid } from 'guid-typescript';

export class BasketModel {
    public UserId: string;
    public totalQty: number;
    public totalPrice: number
    public items: BasketItemModel[];
}