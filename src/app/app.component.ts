import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { DaoService } from './organization/services/dao.service';

import { Store } from '@ngrx/store';
import * as CoinsAction from './stats/store/actions/getRequests.action';
import * as MarketAction from './stats/store/actions/getMarketdata.action';
import * as Reducers from './stats/store/reducers/index';
import * as OrganisationAction from './stats/store/actions/getOrganization.action';
import * as RepositoryAction from './stats/store/actions/repository.action';
import * as MemberAction from './stats/store/actions/member.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') public sidenav!: MatSidenav;

  public menuLink;
  public viewLink;
  public marketData;
  public coinsData = {};

  public constructor(
    private store: Store<Reducers.IState>,
    private location: Location,
    private router: Router
  ) {}

  public ngOnInit() {
    this.store.dispatch(new MarketAction.GetData(true));
    this.store.dispatch(new CoinsAction.GetCoinsOnlineData(true) );
    this.store.dispatch(new CoinsAction.GetCoinsData(true) );
    this.store.dispatch(new OrganisationAction.GetOrganisation(true));
    this.store.dispatch(new RepositoryAction.GetRepository(true));
    this.store.dispatch(new MemberAction.GetMember(true));

    this.store.select('GetMarket', 'marketData').subscribe( marketData => {
      this.marketData = marketData[0];
    });
    this.store.select('CoinsData', 'coinslength').subscribe( coinsLength => {
      this.coinsData['count'] = coinsLength;
    });
    this.store.select('CoinsData', 'onlineCoins').subscribe( onlineCoinsLength => {
      this.coinsData['online'] = onlineCoinsLength;
    });
    this.router.events.subscribe(() => {
      this.menuLink = this.location.path(true).trim().split('/')[1];
      this.viewLink = this.location.path(true).trim().split('/')[2];
    });
  }

  public close() {
    this.sidenav.close();
  }
}
