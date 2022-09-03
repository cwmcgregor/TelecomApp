import { Component, OnInit } from '@angular/core';
import { Plan } from 'app/plans/plans-model';
import { PlanService } from 'app/plans/plans.service';

@Component({
  selector: 'app-billing-index',
  templateUrl: './billing-index.component.html',
  styleUrls: ['./billing-index.component.css']
})
export class BillingIndexComponent implements OnInit {

  plans: Plan[] = []

  constructor(private plansService: PlanService) { }

  ngOnInit(): void {
    this.retrievePlans();
  }

  retrievePlans(){
    //make subscribe call to plans service here
  }

}
