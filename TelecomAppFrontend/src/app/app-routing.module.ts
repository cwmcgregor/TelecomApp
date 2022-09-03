import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingIndexComponent } from './billing/billing-index/billing-index.component';

import { HomeComponent } from './home/home/home.component';
import { PlansIndexComponent } from './plans/plans-index/plans-index.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'plans',component: PlansIndexComponent},
  {path: 'billing', component: BillingIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
