import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansIndexComponent } from './plans/plans-index/plans-index.component';

const routes: Routes = [
  {path:'plans',component: PlansIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
