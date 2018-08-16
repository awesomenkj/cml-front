import { Action } from '@ngrx/store';

export const GET_MARKET_DATA = '[Data] Get Market Data';
export const GET_MARKET_DATA_SUCCESS = '[Data] Get Market Data Success';

export class GetData implements Action {
    public readonly type = GET_MARKET_DATA;
    public constructor( public payload: boolean ) {}
}
export class GetDataSuccess implements Action {
    public readonly type = GET_MARKET_DATA_SUCCESS;
    public constructor( public payload: any ) {}
}

export type AllProducts = GetData | GetDataSuccess;