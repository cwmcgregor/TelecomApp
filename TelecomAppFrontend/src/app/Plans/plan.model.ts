import { Device } from "../Devices/device.model"

export interface Plan{
planId:number,
planName:string,
deviceLimit:number,
price:number,
userId:number,
devices:Device[]
}