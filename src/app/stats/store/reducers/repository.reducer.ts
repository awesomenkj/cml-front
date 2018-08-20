import * as GeRepositoryActions from '../actions/repository.action';


export interface IState {
    isLoading: boolean;
    isLoaded: boolean;
    repository: any;
}

const initialState: IState = {
    isLoading: false,
    isLoaded: false,
    repository: [],
};

export function reducer ( state = initialState, action: GeRepositoryActions.AllMarketData): IState {
    switch (action.type) {
        case GeRepositoryActions.GET_REPOSITORY: {
           return {
               ...state,
               isLoading: true
           };
        }
        case GeRepositoryActions.GET_REPOSITORY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                repository: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
