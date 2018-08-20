import { Action } from '@ngrx/store';

export const GET_ORGANISATION = '[Organisation] Get Organisation';
export const GET_ORGANISATION_SUCCESS = '[Organisation] Get Organisation Success';

export class GetOrganisation implements Action {
    public readonly type = GET_ORGANISATION;
}
export class GetGetOrganisationSuccess implements Action {
    public readonly type = GET_ORGANISATION_SUCCESS;
    public constructor( public payload: any ) {}
}

export type AllMarketData =
                        GetOrganisation |
                        GetGetOrganisationSuccess;