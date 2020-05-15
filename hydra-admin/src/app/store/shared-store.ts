import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedStore<T>{
    constructor(public store: Store<T>){}
    getStore(fnSelect: any, fnSubscribe: (value: T[any]) => void){
        this.store.pipe(select(fnSelect)).subscribe(s => fnSubscribe(s));
    }

    dispatch(action: any){
        this.store.dispatch(action);
    }
}