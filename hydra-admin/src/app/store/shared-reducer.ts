import { SharedAction, TypeAction } from './shared-action';

export function SharedReducer<T>(state: T[] = [], action: SharedAction<T>){
    switch (action.typeAction) {
        case TypeAction.add:
            return [...state, action.payload];
        default:
            return state;
    }
}