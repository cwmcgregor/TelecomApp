import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansIndexComponent } from './plans-index/plans-index.component';

const routes: Routes = [
{path:'plans/index',component: PlansIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
