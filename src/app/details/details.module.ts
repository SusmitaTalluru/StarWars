import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
    declarations: [DetailsComponent],
    imports: [
      CommonModule,
      DetailsRoutingModule,
      MatListModule
    ],
    exports: [DetailsComponent]
})
export class DetailsModule { }