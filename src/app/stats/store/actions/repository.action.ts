import { Action } from '@ngrx/store';

export const GET_REPOSITORY = '[Repository] Get Repository';
export const GET_REPOSITORY_SUCCESS = '[Repository] Get Repository Success';

export class GetRepository implements Action {
    public readonly type = GET_REPOSITORY;
    public constructor( public payload: boolean ) {}
}
export class GetRepositorySuccess implements Action {
    public readonly type = GET_REPOSITORY_SUCCESS;
    public constructor( public payload: any ) {}
}

export type AllMarketData =
                            GetRepository |
                            GetRepositorySuccess;