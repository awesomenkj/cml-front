import * as GetMemberActions from '../actions/member.action';


export interface IState {
    isLoading: boolean;
    isLoaded: boolean;
    member: any;
    pageIndex: any;
    pageSize: any;
    filter: any;
    memberslength: number;

}

const initialState: IState = {
    isLoading: false,
    isLoaded: false,
    member: [],
    memberslength: 0,
    pageIndex: 0,
    pageSize: 50,
    filter: {
      active: '',
      direction: 'asc'
  }
};

export function reducer ( state = initialState, action: GetMemberActions.AllMarketData): IState {
    switch (action.type) {
        case GetMemberActions.GET_MEMBER: {
           return {
               ...state,
               isLoading: true
           };
        }
        case GetMemberActions.GET_MEMBER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                member: action.payload,
            };
        }
        case GetMemberActions.CHANGE_PAGE: {
          const _pageSize = state.pageSize;
          const _pageIndex = state.pageIndex;
          const payload = action.payload.slice(_pageIndex * _pageSize, (_pageIndex + 1) * _pageSize);
          return {
              ...state,
              isLoading: false,
              isLoaded: true,
              member: payload,
              memberslength: action.payload.length
          };
      }
      case GetMemberActions.FIELD_FILTER: {
          const _pageSize = action.payload.pageSize;
          const _pageIndex = action.payload.pageIndex;
          return {
              ...state,
              isLoading: true,
              isLoaded: false,
              pageIndex: _pageIndex,
              pageSize: _pageSize,
          };
      }
        default: {
            return state;
        }
    }
}
