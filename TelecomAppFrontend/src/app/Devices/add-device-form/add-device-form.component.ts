import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { Device } from '../devices-model';
import { DeviceService } from '../device.service';
import { DeviceDTO } from '../device-DTO';

@Component({
  selector: 'app-add-device-form',
  templateUrl: './add-device-form.component.html',
  styleUrls: ['./add-device-form.component.css']
})
export class AddDeviceFormComponent implements OnInit {

  constructor(private deviceService:DeviceService, private router:Router) { }

  ngOnInit(): void {
    this.addDeviceForm=new FormGroup({
      name: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required)
    });
  }
  @Input() planId='';
  public addDeviceForm!:FormGroup;
  device:DeviceDTO=
  {
    deviceName:'',
    phoneNumber:'',
    planId: this.planId
  }

  get f(){return this.addDeviceForm.controls}

  submit(){
    this.device.planId=this.planId;
    this.deviceService.addDevice(this.device).subscribe({next:(res)=>{
      console.log(res);
      this.router.navigate(['/plans']).then(() => {
        location.reload();
    });
    }})
    }
  }

