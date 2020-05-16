import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient } from '@angular/common/http';
import { CatalogModel } from 'src/app/models/catalog-model';

@Injectable()
export class CatalogService extends BaseService{
    constructor(public http: HttpClient){
        super(http, 'catalog');
    }
    list: CatalogModel[] = [];
    getCategories(){
        return this.get<CatalogModel[]>('catalog');
    }   
}