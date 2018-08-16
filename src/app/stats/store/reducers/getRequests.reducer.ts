import * as GetDataActions from '../actions/getRequests.action';


export interface IState {
    isLoaded: boolean;
    results: any;
}

const initialState: IState = {
    isLoaded: false,
    results: {}
};

export function reducer ( state = initialState, action: GetDataActions.AllProducts): IState {
    switch (action.type) {
        case GetDataActions.GET_MARKET_DATA: {
           return {
               ...state,
               isLoaded: true
           };
        }
       case GetDataActions.GET_MARKET_DATA_SUCCESS: {
            return {
                ...state,
                results: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
