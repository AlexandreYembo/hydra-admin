import { CategoryModel } from '../../models/category.model';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService extends BaseService {
    constructor(public http: HttpClient){
        super(http, 'catalog');
    }
    list: CategoryModel[] = [];
    getList(){
        return this.list;
    }

    save(item: CategoryModel){
        if(item.id > 0){
            this.put('', []);
        }
        this.list.push(item);
    }
}