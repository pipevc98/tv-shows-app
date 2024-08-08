import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CrudComponent } from './components/crud/crud.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      { path: 'tv-shows', component: CrudComponent },
      { path: '', pathMatch: 'full', redirectTo: 'tv-shows' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowRoutingModule { }
