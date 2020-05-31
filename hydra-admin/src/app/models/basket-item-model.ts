import { Guid } from 'guid-typescript';

export class BasketItemModel {
    public id: Guid
    public itemId: Guid
    public itemName: string;
    public itemPrice: number;
    public totalPrice: number;
    public qty: number;
}