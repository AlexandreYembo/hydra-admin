import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatalogPagedModel } from 'src/app/models/catalog-model';
import { AuthService } from 'src/app/auth/auth.service';
import { exhaustMap, map, take } from 'rxjs/operators';

@Injectable()
export class CatalogService extends BaseService{
    constructor(public http: HttpClient,
                private authService: AuthService){
        super(http, 'catalog');
    }
    getProducts(){
        return this.authService.user
            .pipe(
                take(1), // where will take only one value and it will unsubscribe
                exhaustMap(user => { //exhaustMap will wait for the first observable to complete, it will return another observable
                    return this.get<CatalogPagedModel>('Product',
                    { 
                        headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.token)
                    });
                }),
                map(r => {
                    return r.list;
                })
            );      
    }   
}