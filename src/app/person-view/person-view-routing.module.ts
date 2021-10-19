import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonViewComponent } from './person-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: ':id', component: PersonViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonViewRoutingModule { }