import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient } from '@angular/common/http';
import { CatalogPagedModel } from 'src/app/models/catalog-model';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CatalogService extends BaseService{
    constructor(public http: HttpClient,
                private authService: AuthService){
        super(http, 'catalog');
    }
    getProducts(){
        return this.get<CatalogPagedModel>('Product')
                .pipe(
                    map(r => {
                        return r.list;
                    })
                );
    }   
}