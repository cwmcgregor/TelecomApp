import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { Device } from '../devices-model';
import { DeviceService } from '../device.service';
import { DeviceDTO } from '../device-DTO';
import { DeviceDTO2 } from '../device-DTO2';

@Component({
  selector: 'app-edit-device-form',
  templateUrl: './edit-device-form.component.html',
  styleUrls: ['./edit-device-form.component.css']
})
export class EditDeviceFormComponent implements OnInit {

  constructor(private deviceService:DeviceService, private router:Router) { }

  ngOnInit(): void {
    this.editDeviceForm=new FormGroup({
      name: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      planId: new FormControl('',Validators.required)
    });
  }
  @Input() deviceId='';
  @Input() deviceName='';
  @Input() phoneNumber='';
  @Input() planId='';
  @Input() planIds:string[]=[];
  public editDeviceForm!:FormGroup;


  get f(){return this.editDeviceForm.controls}

  submit(){
    let updatedDevice:DeviceDTO2=
    {
      deviceId:this.deviceId,
      deviceName:this.deviceName,
      phoneNumber:this.phoneNumber,
      planId:this.planId
    }
    this.deviceService.updateDevice(updatedDevice).subscribe({next:(res)=>{
      console.log(res);
      this.router.navigate(['/plans']).then(() => {
        location.reload();
    });
    }})
    }
  }


