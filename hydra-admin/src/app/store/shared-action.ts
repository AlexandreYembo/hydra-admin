import { Action } from '@ngrx/store';

export enum TypeAction {
    add,
    remove,
    update
}

export interface ISharedAction<T> extends Action {
    payload?: T;
    typeAction: TypeAction;
}

export class SharedAction<T> implements ISharedAction<T> {
    type;
    constructor(public action: string, public typeAction: TypeAction, public payload: T) {
        this.type = action;
    }
}