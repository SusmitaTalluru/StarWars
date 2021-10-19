import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'details', loadChildren: () => import('../person-view/person-view.module').then(m => m.PersonViewModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }