import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../Security/AppSetting';
import { Observable } from 'rxjs';
import {state} from '../Modals/state'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class StateService {
  appURL: string = AppSetting.API_URL + "api";
  appHeader: any = AppSetting.HTTTP_OPTION;
  url:string; 
  constructor(private http:HttpClient) { }

  GetStateByCirleID(circleID:number):Observable<state[]>{
    debugger;
    this.url=this.appURL+'/state/getStateByCircleID/?circleID=' + circleID;
    return this.http.get<state[]>(this.url);
  }
}
