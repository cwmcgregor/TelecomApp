import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansIndexComponent } from './plans-index/plans-index.component';
import { AddDeviceFormComponent } from 'app/Devices/add-device-form/add-device-form.component';
import { EditDeviceFormComponent } from 'app/Devices/edit-device-form/edit-device-form.component';


@NgModule({
  declarations: [
  
    PlansIndexComponent,
    AddDeviceFormComponent,
    EditDeviceFormComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlansModule { }
