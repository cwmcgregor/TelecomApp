import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Plan } from '../plan.model';

@Component({
  selector: 'app-plan.list',
  templateUrl: './plan.list.component.html',
  styleUrls: ['./plan.list.component.css']
})
export class PlanListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
