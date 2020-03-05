import { Injectable } from '@angular/core';
import { AppSetting } from '../Security/AppSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVRTracking, IVROrderDetails, IVRPendingAttempt } from '../Modals/customerOrder';

@Injectable({
  providedIn: 'root'
})
export class IVRService {
  appURL: string = AppSetting.API_URL + "api";
  appHeader: any = AppSetting.HTTTP_OPTION;
  url:string; 
  constructor(private http:HttpClient) { }

  GetIVRCallTracking(date:string):Observable<IVRTracking[]>{
    debugger;
    this.url=this.appURL+'/IVR/IVRDetails/?date=' + date;
    return this.http.get<IVRTracking[]>(this.url);
  }
  GetIVRTotalOrder(date:string):Observable<IVROrderDetails[]>{
    debugger;
    this.url=this.appURL+'/IVR/IVROrder/?date=' + date;
    return this.http.get<IVROrderDetails[]>(this.url);
  }
  GetIVRPendingAttempt(status:number,orderNo:string,customerName:string,type:number):Observable<IVRPendingAttempt[]>{
    debugger;
    this.url=this.appURL+'/IVR/IVRPendingAttempt/?status=' + status + '&orderNo=' + orderNo+'&name'+customerName+'&type='+type;
    return this.http.get<IVRPendingAttempt[]>(this.url);
  }
}
