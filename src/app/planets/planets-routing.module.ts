import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetViewComponent } from '../planet-view/planet-view.component';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'details', loadChildren: () => import('../planet-view/planet-view.module').then(m => m.PlanetViewModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }