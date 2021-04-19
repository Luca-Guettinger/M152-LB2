import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressumRoutingModule } from './impressum-routing.module';
import { ImpressumComponent } from './impressum.component';
import { ImpressumContentComponent } from './impressum-content/impressum-content.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [ImpressumComponent, ImpressumContentComponent],
  imports: [
    CommonModule,
    ImpressumRoutingModule,
    MaterialModule
  ]
})
export class ImpressumModule { }
