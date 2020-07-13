import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient } from '@angular/common/http';
import { BasketModel } from 'src/app/models/basket-model';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { SignalRService } from 'src/app/shared/services/signalR.service';
import { User } from 'oidc-client';


@Injectable()
export class BasketService extends BaseService{
    constructor(public http: HttpClient, public authService: AuthService, public signalRService: SignalRService){
        super(http, 'basket');
    }
    getBasket(callback: any): void{
        this.authService.getUser().then(user => {
            this.user = user;
            this.signalRService.startSignalR(this.apiUrl, user.access_token, () => { //user.access_token, () => {
                this.signalRService.listener('basket', callback);
                this.get<BasketModel>('api/GetBasket').subscribe(result => {
                    callback(result);
                });
            });
        });
    }

    updateBasket(basket: BasketModel) {
        return this.put('api/UpdateBasket', basket)
    }


    deleteBasket(){
        return this.delete('api/DeleteBasket');
    }
}