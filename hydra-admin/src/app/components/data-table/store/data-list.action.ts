//Creates a configured Creator function that, when called, returns an object in the shape of the Action interface.
import { Action } from '@ngrx/store';

export enum DataTableActionsType {
    ADD_ITEM = '[Store DataList] AddItem',
    REMOVE_ITEM = '[Store DataList] RemoveItem',
    UPDATE_ITEM = '[Store DataList] UpdateItem',
}

export class AddItemAction implements Action {
    readonly type =  DataTableActionsType.ADD_ITEM;

    constructor(public payload : any){}
}

export class RemoveItemAction implements Action {
    readonly type =  DataTableActionsType.REMOVE_ITEM;

    constructor(public payload : any){}
}

export class UpdateItemAction implements Action {
    readonly type =  DataTableActionsType.UPDATE_ITEM;

    constructor(public payload : any){}
}

export type DataSourceAction = AddItemAction | RemoveItemAction | UpdateItemAction;