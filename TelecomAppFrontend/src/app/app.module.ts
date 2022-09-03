import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansModule } from './plans/plans.module';
import { DevicesModule } from './Devices/devices.module';
import { BillingModule } from './billing/billing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlansModule,
    DevicesModule,
    FormsModule,
    ReactiveFormsModule,
    BillingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
