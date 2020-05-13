import { CategoryModel } from '../models/category.model';

export class CategoryService {
    list: CategoryModel[] = [];
    getList(){
        return this.list;
    }

    save(item: CategoryModel){
        this.list.push(item);
    }
}