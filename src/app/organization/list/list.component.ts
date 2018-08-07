import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoinsDataSource } from '../services/coins-datasource.service';
import { MatPaginator, MatSort } from '@angular/material';
import { DaoService } from '../services/dao.service';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-org-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  public displayColumns = [ 'rank', 'name', 'price', 'marketCap', 'currentSupply', 'volume', 'changeDay', 'action'];
  public coinsDatasource: CoinsDataSource | null;
  public loaded = false;
  public coins;

  public constructor(
    private dao: DaoService,
    private router: Router,
    private gitService: GithubService
  ) { }

  public ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Coins per page';
    this.coinsDatasource = new CoinsDataSource(this.dao, this.paginator, this.sort, this.gitService);
    this.coinsDatasource.coins.subscribe((coins) => {
      if (coins.length > 0) {
        this.loaded = true;
      }
    });
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
