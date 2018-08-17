import { Action } from '@ngrx/store';

export const GET_COINS_DATA = '[Coins] Get Coins Data';
export const GET_COINS_DATA_SUCCESS = '[Coins] Get Coins Data Success';

export const GET_COINS_ONLINE_DATA = '[Coins] Get Online Coins Data';
export const GET_COINS_ONLINE_DATA_SUCCESS = '[Coins] Get Coins Online Data Success';

export const GET_COINS_OFFLINE_DATA = '[Coins] Get Offline Coins Data';
export const GET_COINS_OFFLINE_DATA_SUCCESS = '[Coins] Get Offline Coins Data Success';

export class GetCoinsData implements Action {
    public readonly type = GET_COINS_DATA;
    public constructor( public payload: boolean ) {}
}
export class GetCoinsDataSuccess implements Action {
    public readonly type = GET_COINS_DATA_SUCCESS;
    public constructor( public payload: any ) {}
}

export class GetCoinsOfflineData implements Action {
    public readonly type = GET_COINS_OFFLINE_DATA;
    public constructor( public payload: boolean ) {}
}
export class GetCoinsOfflineDataSuccess implements Action {
    public readonly type = GET_COINS_OFFLINE_DATA_SUCCESS;
    public constructor( public payload: any ) {}
}

export class GetCoinsOnlineData implements Action {
    public readonly type = GET_COINS_ONLINE_DATA;
    public constructor( public payload: boolean ) {}
}
export class GetCoinsOnlineDataSuccess implements Action {
    public readonly type = GET_COINS_ONLINE_DATA_SUCCESS;
    public constructor( public payload: any ) {}
}

export type AllProducts =
                        GetCoinsData|
                        GetCoinsDataSuccess |
                        GetCoinsOnlineData |
                        GetCoinsOnlineDataSuccess |
                        GetCoinsOfflineData |
                        GetCoinsOfflineDataSuccess;