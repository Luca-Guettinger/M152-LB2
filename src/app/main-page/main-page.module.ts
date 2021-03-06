import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { TitleComponent } from './title/title.component';
import {MaterialModule} from '../material/material.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LinksComponent } from './links/links.component';
import { SlideInImageComponent } from './slide-in-image/slide-in-image.component';


@NgModule({
  declarations: [MainPageComponent, TitleComponent, AboutComponent, ProjectsComponent, LinksComponent, SlideInImageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule
  ]
})
export class MainPageModule { }
