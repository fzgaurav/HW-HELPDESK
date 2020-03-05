import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDistrictService {

  city_id:number;
  city_name:string;
  city_s_name:string;
  state_s_id:string;  
  IsActive:boolean;
  status_info1:number;
  CircleId:number;
  s_name:string
  CircleName:string;
  defaultRoute:number;
  constructor(
    city_id:number,
    city_name:string,
    city_s_name:string,
    state_s_id:string,
    IsActive:boolean,
    status_info1:number,
    CircleId:number,
    s_name:string,
    CircleName:string,
    defaultRoute:number
  ) {
    this.city_id=city_id;
    this.city_name=city_name;
    this.city_s_name=city_s_name;
    this.state_s_id=state_s_id;
    this.IsActive=IsActive;
    this.status_info1=status_info1;
    this.CircleId=CircleId;
    this.s_name=s_name;
    this.CircleName=CircleName;
    this.defaultRoute=defaultRoute;
   }
}
