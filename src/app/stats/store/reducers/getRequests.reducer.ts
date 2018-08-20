import * as GetDataActions from '../actions/getRequests.action';


export interface IState {
    isLoading: boolean;
    isLoaded: boolean;
    coins: any;
    onlineCoins: any;
    coinslength: number;
    offlineCoins: any;
    onlineCoinslength: number;
}

const initialState: IState = {
    isLoading: false,
    isLoaded: false,
    coins: [],
    onlineCoins: [],
    coinslength: 0,
    offlineCoins: [],
    onlineCoinslength: 0
};

export function reducer ( state = initialState, action: GetDataActions.AllProducts): IState {
    switch (action.type) {
        case GetDataActions.GET_COINS_DATA: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GetDataActions.GET_COINS_ONLINE_DATA: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GetDataActions.GET_COINS_OFFLINE_DATA: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GetDataActions.GET_COINS_ONLINE_DATA_SUCCESS: {
            return {
                ...state,
                onlineCoins: action.payload,
                onlineCoinslength: action.payload.length
            };
        }
        case GetDataActions.GET_COINS_OFFLINE_DATA_SUCCESS: {
            return {
                ...state,
                offlineCoins: action.payload,
            };
        }
        case GetDataActions.GET_COINS_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                coins: action.payload,
                coinslength: action.payload.length
            };
        }
        default: {
            return state;
        }
    }
}
