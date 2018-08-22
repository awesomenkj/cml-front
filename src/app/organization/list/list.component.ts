import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoinsDataSource } from '../services/coins-datasource.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Store } from '@ngrx/store';
import * as CoinsAction from '../../stats/store/actions/getRequests.action';
import * as Reducers from '../../stats/store/reducers/index';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-org-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  public displayColumns = [ 'rank', 'name', 'price', 'marketCap', 'currentSupply', 'volume', 'changeDay', 'action'];
  public coinsDatasource: CoinsDataSource | null | any;
  public test: CoinsDataSource | null | any;
  public loaded = false;
  public coins;
  public coinsLength: any;
  public pageEvent: PageEvent;

  public constructor(
    private router: Router,
    private store: Store<Reducers.IState>,
  ) {
  }

  public ngOnInit() {
    this.store.dispatch(new CoinsAction.GetCoinsData() );

    this.paginator._intl.itemsPerPageLabel = 'Coins per page';
    this.store.select('CoinsData', 'coinslength').subscribe( coinsLength => {
      if (coinsLength) {
        this.coinsLength = coinsLength;
        this.loaded = true;
      }
    });
    this.store.select('CoinsData', 'coins').subscribe(coins => {
      this.coinsDatasource = new MatTableDataSource(coins);
    });
  }
  public goToNextPage($event) {
      this.store.dispatch(new CoinsAction.ChangePage($event));
  }
  public ngAfterViewInit() {
    this.coinsDatasource.paginator = this.paginator;
    this.coinsDatasource.sort = this.sort;
  }

  public view = (coin: string) => {
    this.router.navigate(['coins/view/' + coin]);
  }

  public applyFilter(filterValue: string) {
    this.coinsDatasource.filter = filterValue.trim().toLowerCase();
  }
}
