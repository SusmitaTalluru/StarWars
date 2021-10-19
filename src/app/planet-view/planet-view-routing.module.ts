import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetViewComponent } from './planet-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: ':id', component: PlanetViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetViewRoutingModule { }