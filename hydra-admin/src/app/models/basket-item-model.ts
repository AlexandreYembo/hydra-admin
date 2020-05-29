import { Guid } from 'guid-typescript';

export class BasketItemModel {
    public id: Guid
    public itemId: Guid
    public itemName: string;
    public price: number;
    public qty: number;
}