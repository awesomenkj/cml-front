import { Action } from '@ngrx/store';

export const GET_MEMBER = '[Member] Get Member';
export const GET_MEMBER_SUCCESS = '[Member] Get Member Success';

export const CHANGE_PAGE = '[Paginator] Change Page';
export const FIELD_FILTER = '[Filter] Field Filter';


export class ChangePage implements Action {
  public readonly type = CHANGE_PAGE;
  public constructor( public payload: any ) {}
}
export class FieldFilter implements Action {
  public readonly type = FIELD_FILTER;
  public constructor( public payload: any ) {}
}
export class GetMember implements Action {
    public readonly type = GET_MEMBER;
}
export class GetMemberSuccess implements Action {
    public readonly type = GET_MEMBER_SUCCESS;
    public constructor( public payload: any ) {}
}

export type AllMarketData =
                            GetMember |
                            GetMemberSuccess |
                            FieldFilter |
                            ChangePage;
