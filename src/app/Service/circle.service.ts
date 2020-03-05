import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSetting } from '../Security/AppSetting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { circle } from '../Modals/circle';
@Injectable({
  providedIn: 'root'
})
export class CircleService {
  appURL: string = AppSetting.API_URL + "api";
  appHeader: any = AppSetting.HTTTP_OPTION;
  url:string;
  constructor(private http:HttpClient) { }

  GetCircle():Observable<circle[]>{
    debugger;
    this.url=this.appURL+'/Circle/getcircle';
    return this.http.get<circle[]>(this.url);
  }
}
