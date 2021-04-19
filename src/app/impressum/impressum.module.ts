import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpressumRoutingModule } from './impressum-routing.module';
import { ImpressumComponent } from './impressum.component';
import { ImpressumContentComponent } from './impressum-content/impressum-content.component';
import {MaterialModule} from '../material/material.module';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [ImpressumComponent, ImpressumContentComponent, SourcesComponent],
  imports: [
    CommonModule,
    ImpressumRoutingModule,
    MaterialModule
  ]
})
export class ImpressumModule { }
