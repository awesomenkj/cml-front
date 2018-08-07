import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MomentModule } from 'angular2-moment';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { OnlineComponent } from './online/online.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'prefix'
  },
  {
    path: 'all',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:label',
    component: EditComponent
  },
  {
    path: 'view/:label',
    component: ViewComponent
  },
  {
    path: 'online',
    component: OnlineComponent
  },
  {
    path: 'repositories',
    component: RepositoriesComponent
  },
  {
    path: 'members',
    component: MembersComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MomentModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListComponent,
    ViewComponent,
    CreateComponent,
    EditComponent, OnlineComponent, RepositoriesComponent, MembersComponent
  ]
})
export class OrganizationModule { }
