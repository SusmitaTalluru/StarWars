import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { PlanetViewComponent } from './planet-view.component';
import { PlanetViewRoutingModule } from './planet-view-routing.module';

@NgModule({
  declarations: [
    PlanetViewComponent
  ],
  imports: [
    CommonModule,
    PlanetViewRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class PlanetViewModule { }