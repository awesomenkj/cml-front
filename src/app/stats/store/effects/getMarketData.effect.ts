import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DaoService } from '../../../organization/services/dao.service';
import * as getData  from '../actions/getRequests.action';
import * as getMarketData  from '../actions/getMarketdata.action';

@Injectable()
export class GetProductsEffect {

    @Effect()
    public getMarketData$: Observable<Action> = this.action$.ofType(getMarketData.GET_MARKET_DATA).pipe(
        map((action: getMarketData.GetData) => action.payload),
        switchMap( () => this.daoService.getMarketData()),
        // tap( (data) => console.log(data) ),
        map( results => new getMarketData.GetDataSuccess(results))
    );

    @Effect()
    public getCoinsData$: Observable<Action> = this.action$.ofType(getData.GET_COINS_DATA).pipe(
        map((action: getData.GetCoinsData) => action.payload),
        switchMap( () => this.daoService.getCoins()),
        // tap( (data) => console.log(data) ),
        map( results => new getData.GetCoinsDataSuccess(results))
    );

    @Effect()
    public getCoinsOnlineData$: Observable<Action> = this.action$.ofType(getData.GET_COINS_ONLINE_DATA).pipe(
        map((action: getData.GetCoinsOnlineData) => action.payload),
        switchMap( () => this.daoService.getOnlineCoins()),
        // tap( (data) => console.log(data) ),
        map( results => new getData.GetCoinsOnlineDataSuccess(results))
    );
    @Effect()
    public getCoinsOfflineData$: Observable<Action> = this.action$.ofType(getData.GET_COINS_OFFLINE_DATA).pipe(
        map((action: getData.GetCoinsOfflineData) => action.payload),
        switchMap( () => this.daoService.getOfflineCoins()),
        // tap( (data) => console.log(data) ),
        map( results => new getData.GetCoinsOfflineDataSuccess(results))
    );

    public constructor(
        private action$: Actions,
        private daoService: DaoService
    ) {}
}