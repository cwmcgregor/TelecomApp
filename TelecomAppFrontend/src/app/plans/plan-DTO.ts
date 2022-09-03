import { Device } from "../Devices/devices-model"

export interface PlanDTO {
        planName:string,
        deviceLimit:number,
        price:number,
        userId:number,
        devices:Device[]
}