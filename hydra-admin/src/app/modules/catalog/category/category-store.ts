import { SharedAction } from 'src/app/store/shared-action';
import { SharedReducer } from 'src/app/store/shared-reducer';
import { CategoryModel } from 'src/app/models/category.model';

export enum CategoryActionsType {
    ADD_ITEM = '[Category Store DataList] AddItem',
    REMOVE_ITEM = '[Category Store DataList] RemoveItem',
    UPDATE_ITEM = '[Category Store DataList] UpdateItem',
}

export function CategoryListFacade(state: CategoryModel[] = [], action: SharedAction<CategoryModel>){
    return SharedReducer<CategoryModel>(state, action);
}