import { Injectable } from '@angular/core';
import { AppSetting } from '../Security/AppSetting';
import { HttpClient } from '@angular/common/http';
import { pincode } from '../Modals/pincode';
import { Observable } from 'rxjs';
import { pincodeData } from '../Modals/pincodeData';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  appURL: string = AppSetting.API_URL + "api";
  appHeader: any = AppSetting.HTTTP_OPTION;
  url:string; 
  constructor(private http:HttpClient) { }

  InsertPincode(pincodeData:pincode): Observable<any> {
     this.url = this.appURL + '/Pincode/Insert';
     return this.http.post<any>(this.url, pincodeData, this.appHeader);     
  }

  GetPincode():Observable<pincodeData[]>{
    this.url=this.appURL+'/Pincode/getpincode';
    return this.http.get<pincodeData[]>(this.url);
  }


}
