import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MembersDataSource } from '../services/members-datasource.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as MemberAction from '../../stats/store/actions/member.action';
import { Store } from '@ngrx/store';
import * as Reducers from '../../stats/store/reducers/index';
import * as Selector from '../../stats/store/selectors/filter-members.selector';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;
  @ViewChild(MatSort)
  public sort!: MatSort;

  public loaded = false;
  public membersDatasource: MembersDataSource | null | any;
  public membersLength: any;

  public constructor(
    private store: Store<Reducers.IState>
  ) {}

  public ngOnInit() {
    this.store.dispatch(new MemberAction.GetMember());
    this.paginator._intl.itemsPerPageLabel = 'Members per page';
    this.membersLength = this.store.select('GetMembers', 'memberslength');
    this.store.select(Selector.getMembers).subscribe(members => {
      this.membersDatasource = new MatTableDataSource(members);
    });
  }

  public goToNextPage($event) {
    this.store.dispatch(new MemberAction.ChangePage($event));
  }

  public ngAfterViewInit() {
    this.membersDatasource.paginator = this.paginator;
    this.membersDatasource.sort = this.sort;
  }
}
