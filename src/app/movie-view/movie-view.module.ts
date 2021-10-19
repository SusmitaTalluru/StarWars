import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { MovieViewComponent } from './movie-view.component';
import { MovieViewRoutingModule } from './movie-view-routing.module';

@NgModule({
  declarations: [
    MovieViewComponent
  ],
  imports: [
    CommonModule,
    MovieViewRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class MovieViewModule { }