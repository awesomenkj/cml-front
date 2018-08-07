import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RepositoriesDataSource } from '../services/repositories-datasource.service';
import { MatPaginator, MatSort } from '@angular/material';
import { DaoService } from '../services/dao.service';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild(MatSort) public sort!: MatSort;

  public displayColumns = ['name', 'commits', 'issues',
    'milestones', 'projects', 'pullRequests',
    'releases', 'stargazers', 'watchers'];
  public reposDatasource!: RepositoriesDataSource;
  public loaded = false;
  public repos!: any;

  public constructor(
    private dao: DaoService,
    private gitService: GithubService
  ) {
  }

  public ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Repositories per page';
    this.reposDatasource = new RepositoriesDataSource(this.dao, this.paginator, this.sort, this.gitService);
    this.reposDatasource.repositories.subscribe((repos) => {
      if (repos.length > 0) {
        this.loaded = true;
      }
    });
  }

  public ngAfterViewInit() {
    this.reposDatasource.paginator = this.paginator;
    this.reposDatasource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.reposDatasource.filter = filterValue.trim().toLowerCase();
  }
}
