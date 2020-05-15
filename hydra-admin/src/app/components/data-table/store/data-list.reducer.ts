/*
Creates a reducer function to handle state transitions.
Reducer creators reduce the explicitness of reducer functions with switch statements.
*/

// import { createReducer, on } from '@ngrx/store';
import { DataSourceAction, DataTableActionsType } from './data-list.action';
//import { DataTable } from '../data-table-datasource';

// export const initialState: DataTable = new DataTable();

// initialState.dataSource = [{name: 'initial'}, {name: 'initial'}, {name: 'initial'}, {name: 'initial'}, {name: 'initial'}, {name: 'initial'}, {name: 'initial'}];

// export function DatalistReducer(state: DataTable = initialState, action: DataSourceAction){
//     switch (action.type) {
//         case DataTableActionsType.ADD_ITEM:
//             return [...state.dataSource, action.payload];
//         default:
//             return state;
//       }
// }

export function DataSourceReducer(state: any[] = [{name: 'initial'}], action: DataSourceAction){
    switch (action.type) {
        case DataTableActionsType.ADD_ITEM:
            return [...state, action.payload];
        case DataTableActionsType.REMOVE_ITEM:
            return [...state, action.payload];

        default:
            return state; 
      }
}