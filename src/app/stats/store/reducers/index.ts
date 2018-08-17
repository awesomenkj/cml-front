import { ActionReducerMap } from '@ngrx/store';

import * as GetDatas from './getRequests.reducer';
import * as GetMarket from './getMarketData.reducer';
import * as GetOrganization from './getOrganization.reducer';
import * as GetReposiory from './repository.reducer';
import * as GerMember from './member.reduce';


export interface IState {
    CoinsData: GetDatas.IState;
    GetMarket: GetMarket.IState;
    GetOrganization: GetOrganization.IState;
    GetReposiory: GetReposiory.IState;
    GerMember: GerMember.IState;
}

export const reducers: ActionReducerMap<IState> = {
    CoinsData: GetDatas.reducer,
    GetMarket: GetMarket.reducer,
    GetOrganization: GetOrganization.reducer,
    GetReposiory: GetReposiory.reducer,
    GerMember: GerMember.reducer
};