import { Guid } from 'guid-typescript';

export class BasketItemModel {
    public id: Guid
    public productId: Guid
    public price: number;
    public qty: number;
}