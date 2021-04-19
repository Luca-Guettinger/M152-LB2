import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum.component';
import {SourcesComponent} from './sources/sources.component';

const routes: Routes = [
  { path: '', component: ImpressumComponent },
  { path: 'sources', component: SourcesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpressumRoutingModule { }
