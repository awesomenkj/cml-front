import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DaoService } from './organization/services/dao.service';

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
    private location: Location,
    private daoService: DaoService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.daoService.getMarketData().subscribe((data) => {
      if (data.length === 1) {
        this.marketData = data[0];
      }
    });

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
