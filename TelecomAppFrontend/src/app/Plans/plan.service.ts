import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Plan } from './plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private plansUrl="https://localhost:7238/Plans";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http:HttpClient) { }

  getPlan(id:number):Observable<Plan>{
    let url=`${this.plansUrl}/${id}`;
    return this.http.get<Plan>(url,this.httpOptions);
  }

  getUsersPlans(id:number):Observable<Plan[]>{
    let url=`${this.plansUrl}/${id}`;
    return this.http.get<Plan[]>(url,this.httpOptions);
  }

  addPlan(plan:Plan):Observable<Plan>{
    return this.http.post<Plan>(this.plansUrl,plan,this.httpOptions);
  }

  updatePlan(plan:Plan):Observable<Plan>{
    let url=`${this.plansUrl}/${plan.planId}`;
    return this.http.put<Plan>(url,plan,this.httpOptions);
  }

  deletePlan(id:number):Observable<Plan>{
    let url=`${this.plansUrl}/${id}`;
    return this.http.delete<Plan>(url,this.httpOptions);
  }
}

