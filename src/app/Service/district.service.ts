import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { circle } from '../Modals/circle';
import {ResponseFROMAPI} from '../Modals/response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../Security/AppSetting';
import { district } from '../Modals/district';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  appURL: string = AppSetting.API_URL + "api";
  appHeader: any = AppSetting.HTTTP_OPTION;
  url:string; 
  constructor(private http:HttpClient) { }


 

   GetAllActiveDistrict():Observable<district[]>{
    //debugger;
    this.url=this.appURL+'/District/getActivedistrict';
    return this.http.get<district[]>(this.url);
  }

  GetDistrict():Observable<district[]>{
    //debugger;
    this.url=this.appURL+'/District/getdistrict';
    return this.http.get<district[]>(this.url);
  }

  GetDistrictStateWise(stateID:number):Observable<district[]>{
    //debugger;
    this.url=this.appURL+'/District/getdistrictbystateID/?stateID='+ stateID;
    return this.http.get<district[]>(this.url);
  }

  InsertDistrict(menuData:district): Observable<any> {
    this.url = this.appURL + '/District/Insert';
    return this.http.post<any>(this.url, menuData, this.appHeader);
  }
  UpdateDefaultRoute(menuData:district):Observable<any>{
    //debugger;
    this.url = this.appURL + '/District/SetDefaultRoute';
    return this.http.put<any>(this.url ,menuData, this.appHeader)
  }

}
