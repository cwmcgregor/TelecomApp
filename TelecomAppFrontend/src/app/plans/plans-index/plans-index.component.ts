import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Plan } from '../plans-model';
import { PlanService } from '../plans.service';

@Component({
  selector: 'app-plans-index',
  templateUrl: './plans-index.component.html',
  styleUrls: ['./plans-index.component.css']
})
export class PlansIndexComponent implements OnInit {

  constructor(private planService:PlanService, private router:Router) { }

  ngOnInit(): void {
    this.getUsersPlans();
  }

  plans:Plan[]=[];


  getUsersPlans():void{
    this.planService.getUsersPlans(1).subscribe(plans=>this.plans=plans);
  }
}
