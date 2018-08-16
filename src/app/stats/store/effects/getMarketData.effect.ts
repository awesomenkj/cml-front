import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {  map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DaoService } from '../../../organization/services/dao.service';
import * as getData  from '../actions/getRequests.action';

@Injectable()
export class GetProductsEffect {

    @Effect()
    public getMarketData$: Observable<Action> = this.action$.ofType(getData.GET_MARKET_DATA).pipe(
        map((action: getData.GetData) => action.payload),
        switchMap( () => this.daoService.getMarketData()),
        map( results => new getData.GetDataSuccess(results[0]))
    );
    public constructor(
        private action$: Actions,
        private daoService: DaoService
    ) {}
}