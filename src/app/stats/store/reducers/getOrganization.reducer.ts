import * as GetOrganisationActions from '../actions/getOrganization.action';


export interface IState {
    isLoading: boolean;
    isLoaded: boolean;
    organization: any;
}

const initialState: IState = {
    isLoading: false,
    isLoaded: false,
    organization: [],
};

export function reducer ( state = initialState, action: GetOrganisationActions.AllMarketData): IState {
    switch (action.type) {
        case GetOrganisationActions.GET_ORGANISATION: {
           return {
               ...state,
               isLoading: true
           };
        }
        case GetOrganisationActions.GET_ORGANISATION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                organization: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
