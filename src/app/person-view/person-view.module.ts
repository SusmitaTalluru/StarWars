import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { PersonViewComponent } from './person-view.component';
import { PersonViewRoutingModule } from './person-view-routing.module';

@NgModule({
  declarations: [
    PersonViewComponent
  ],
  imports: [
    CommonModule,
    PersonViewRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class PersonViewModule { }