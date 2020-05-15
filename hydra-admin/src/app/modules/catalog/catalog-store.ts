import { CatalogModel } from 'src/app/models/catalog-model';
import { SharedAction } from 'src/app/store/shared-action';
import { SharedReducer } from 'src/app/store/shared-reducer';

export enum CatalogActionsType {
    ADD_ITEM = '[Catalog Store DataList] AddItem',
    REMOVE_ITEM = '[Catalog Store DataList] RemoveItem',
    UPDATE_ITEM = '[Catalog Store DataList] UpdateItem',
}

export function CatalogListFacade(state: CatalogModel[] = [], action: SharedAction<CatalogModel>){
    return SharedReducer<CatalogModel>(state, action);
}