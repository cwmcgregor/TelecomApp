import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DevicesRoutingModule } from './devices-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DevicesModule { }
