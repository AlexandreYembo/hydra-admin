import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient } from '@angular/common/http';
import { BasketModel } from 'src/app/models/basket-model';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { SignalRService } from 'src/app/shared/services/signalR.service';


@Injectable()
export class BasketService extends BaseService{
    signalRService: SignalRService;
    constructor(public http: HttpClient, public authService: AuthService){
        super(http, 'basket');
        // this.hubConnection = new signalR.HubConnectionBuilder()
        //                         .withUrl('')
    }
    list: BasketModel[] = [];
    getBasket(callback: any): void{
        // this.requestBySignalR('price', 'transferchartdata');
        //https://priceupdated.service.signalr.net/client/?hub=price

        this.authService.getUser().then(user => {
            this.requestBySignalR('api', user.access_token);
            this.signalRService.listener('basket', callback);
            this.get<BasketModel>('api/GetBasket?UserId=3e4df0e3-b135-4162-8bf6-89c848d800ec').subscribe(result => {
                callback(result);
            });
        });

        //return this.post('api/getBasket', null);
    }

    updateBasket(basket: BasketModel, callback: any) {
        this.put('api/UpdateBasket', basket).subscribe(result =>{
            callback(result);
        });
    }


    deleteBasket(callback: any){
        this.delete('api/DeleteBasket?UserId=3e4df0e3-b135-4162-8bf6-89c848d800ec').subscribe(result =>{
            callback(result);
        });
    }

    private requestBySignalR(endpoint: string, access_token: string) {
        this.signalRService = new SignalRService(`${this.apiUrl}/${endpoint}`, access_token);
        // this.signalRService.listener(cmd);
    }
    
}