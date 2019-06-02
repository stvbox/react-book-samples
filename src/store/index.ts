import { combineReducers, createStore, AnyAction } from 'redux';
import {v4} from 'uuid';

export enum StringsActions {
    Add = 'ADD_STRING',
    Set = "SET_STRING"
}

const str = (state: string = '', action: any): string => {
    if (action.type === StringsActions.Set) {
        return action.payload.id;
    }
    return state;
}

const strs = (state: string[] = [], action: AnyAction): string[] => {
    switch (action.type) {
        case StringsActions.Add:
            const saveObject = {
                ...action.payload,
                id: v4(),
            };
            return [...state, saveObject];
        default:
            return state;
    }
}

const reducers = combineReducers({ str, strs });

const singleToneSatate = createStore(reducers);
export const getStore = () => {
    return singleToneSatate;
}

export const applicationStore = getStore();
