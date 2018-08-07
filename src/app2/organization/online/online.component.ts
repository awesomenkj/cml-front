import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationsDataSource } from '../services/organizations-datasource.service';
import { MatPaginator, MatSort } from '@angular/material';
import { DaoService } from '../services/dao.service';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild(MatSort) public sort!: MatSort;

  public displayColumns =
    ['name', 'repositories', 'members', 'commits',
      'issues', 'milestones', 'projects', 'pullRequests', 'releases', 'stargazers', 'watchers'];
  public orgsDatasource!: OrganizationsDataSource ;
  public loaded = false;
  public coins!: any;
  public status = 'online';

  public constructor(
    private dao: DaoService,
    private router: Router,
    private gitService: GithubService
  ) {
  }

  public ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Organizations per page';
    this.orgsDatasource = new OrganizationsDataSource(this.dao, this.paginator, this.sort, this.gitService);
    this.orgsDatasource.orgs.subscribe((coins) => {
      if (coins.length > 0) {
        this.loaded = true;
      }
    });
  }

  public ngAfterViewInit() {
    this.orgsDatasource.paginator = this.paginator;
    this.orgsDatasource.sort = this.sort;
  }

  public view = (coin: string) => {
    this.router.navigate(['coins/view/' + coin]);
  };

  public applyFilter(filterValue: string) {
    this.orgsDatasource.filter = filterValue.trim().toLowerCase();
  }

}
