import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowRoutingModule } from './tv-show-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CrudComponent } from './components/crud/crud.component';
import { AddComponent } from './components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CrudComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    TvShowRoutingModule,
    ReactiveFormsModule
  ]
})
export class TvShowModule { }
