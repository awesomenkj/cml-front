import { ActionReducerMap } from '@ngrx/store';

import * as GetDatas from './getRequests.reducer';


export interface IState {
    MarketData: GetDatas.IState;
}

export const reducers: ActionReducerMap<IState> = {
    MarketData: GetDatas.reducer,
};