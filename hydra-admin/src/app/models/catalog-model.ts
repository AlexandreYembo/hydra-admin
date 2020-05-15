import { CategoryModel } from './category.model';

export class CatalogModel {
    public id: number;
    public name: string;
    public categories: CategoryModel[];
}