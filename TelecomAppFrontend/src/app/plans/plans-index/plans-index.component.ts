import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Plan } from '../plans-model';
import { PlanService } from '../plans.service';
import { DeviceService } from 'app/Devices/device.service';
import { PlanDTO } from '../plan-DTO';

@Component({
  selector: 'app-plans-index',
  templateUrl: './plans-index.component.html',
  styleUrls: ['./plans-index.component.css']
})
export class PlansIndexComponent implements OnInit {

  constructor(private planService:PlanService, private deviceService:DeviceService, private router:Router) { }

  ngOnInit(): void {
    this.getUsersPlans();
  }

  plans:Plan[]=[];
  showAddPlan:boolean=false;
  selectedPlan?:PlanDTO;
  planOptions:PlanDTO[]=[
    {
      planName: 'Basic',
      deviceLimit:1,
      price:19.99,
      userId:1,
      devices: []
    },
    {
      planName: 'Family',
      deviceLimit:4,
      price:89.99,
      userId:1,
      devices: []
    },
    {
      planName: 'Premium',
      deviceLimit:6,
      price:109.99,
      userId:1,
      devices: []
    }
  ]

  expandPlan(plan:Plan):void{
    if(plan.expand==null){
      plan.expand=true;
    } else if(plan.expand==false){
      plan.expand=true;
    }
    else{
      plan.expand=false;
    }
  }
  getUsersPlans():void{
    this.planService.getUsersPlans(1).subscribe(plans=>this.plans=plans);
  }
  deletePlan(id:number):void{
    this.planService.deletePlan(id).subscribe({next:(res)=>{
      console.log(res);
      this.router.navigate(['/plans/index']).then(() => {
        location.reload();
    });
    }})
  }

  deleteDevice(id:number):void{
    this.deviceService.deleteDevice(id).subscribe({next:(res)=>{
      console.log(res);
      this.router.navigate(['/plans/index']).then(() => {
        location.reload();
    });
    }})
  }

  toggleAddPlanForm():void{
    if(this.showAddPlan==true){
      this.showAddPlan=false;
    }
    else{
      this.showAddPlan=true;
    }
  }
  selectPlanOption(plan:PlanDTO):void{
    this.selectedPlan=plan;
  }
  addNewPlan():void{
    if(this.selectedPlan){
    this.planService.addPlan(this.selectedPlan).subscribe({next:(res)=>{
      console.log(res);
      this.router.navigate(['/plans/index']).then(() => {
        location.reload();
    });
    }})
    }
  }
}
