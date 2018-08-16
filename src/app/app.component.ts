import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DaoService } from './organization/services/dao.service';

import { Store } from '@ngrx/store';
import * as DataAction from './stats/store/actions/getRequests.action';
import * as Reducers from './stats/store/reducers/index';

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
    private daoService: DaoService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.store.dispatch(new DataAction.GetData(true) );

    // this.daoService.getMarketData().subscribe((data) => {
    //   if (data.length === 1) {
    //     this.store.dispatch(new DataAction.GetDataSuccess(data[0]));
    //     // this.marketData = data[0];
    //   }
    // });
    this.store.select('MarketData', 'results').subscribe( marketData => this.marketData = marketData);
    this.daoService.coins.subscribe((c) => {
      this.coinsData['count'] = c.length;
    });

    this.daoService.onlineCoins.subscribe((c) => {
      this.coinsData['online'] = c.length;
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
