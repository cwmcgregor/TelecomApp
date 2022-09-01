import { Device } from "../devices/devices-model";

export interface Plan {
        planId:number,
        planName:string,
        deviceLimit:number,
        price:number,
        userId:number,
        devices:Device[]
}
