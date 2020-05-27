import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient } from '@angular/common/http';
import { BasketModel } from 'src/app/models/basket-model';


@Injectable()
export class BasketService extends BaseService{

    constructor(public http: HttpClient){
        super(http, 'basket');
        // this.hubConnection = new signalR.HubConnectionBuilder()
        //                         .withUrl('')
    }
    list: BasketModel[] = [];
    checkBasketUpdated(callback: any): void{
        // this.requestBySignalR('price', 'transferchartdata');
        //https://priceupdated.service.signalr.net/client/?hub=price
        this.requestBySignalR('api');
        this.signalRService.listener('get_basket', callback);
        // return this.get<BasketModel[]>('api/getBasket').subscribe(result => {
        //     console.log(result);
        // });
        //return this.post('api/getBasket', null);
    }   
}