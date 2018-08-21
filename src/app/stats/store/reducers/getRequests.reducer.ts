import * as GetDataActions from '../actions/getRequests.action';


export interface IState {
    isLoading: boolean;
    isLoaded: boolean;
    pageIndex: any;
    pageSize: any;
    coins: any;
    onlineCoins: any;
    coinslength: number;
    offlineCoins: any;
    onlineCoinslength: number;
}

const initialState: IState = {
    isLoading: false,
    isLoaded: false,
    pageIndex: 0,
    pageSize: 50,
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
                isLoading: true,
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
            const payload = action.payload.slice(0, 50);
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                coins: payload,
                coinslength: action.payload.length
            };
        }
        case GetDataActions.CHANGE_PAGE: {
            const _pageSize = action.payload.pageSize;
            const _pageIndex = action.payload.pageIndex;
            const payload = action.payload.slice(_pageIndex, _pageSize);
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                pageIndex: _pageIndex,
                pageSize: _pageSize,
                coins: payload,
                coinslength: action.payload.length
            };
        }
        default: {
            return state;
        }
    }
}
