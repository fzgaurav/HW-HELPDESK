import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DropDown } from '../Modals/dropdown';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../Security/AppSetting';
import { DefaultRoute } from '../Modals/defaultRoute';
import { Route, RouteRequestDetail } from '../Modals/routeRequest';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  appURL: string = AppSetting.API_URL + "api";
  appHeader: any = AppSetting.HTTTP_OPTION;
  url: string;
  constructor(private http: HttpClient) { }

  GetRequestFor(): Observable<DropDown[]> {
    debugger;
    this.url = this.appURL + '/route/requestFor';
    return this.http.get<DropDown[]>(this.url);
  }

  GetDefaultRoute(): Observable<DefaultRoute[]> {
    debugger;
    this.url = this.appURL + '/route/defaultRoute';
    return this.http.get<DefaultRoute[]>(this.url);
  }

  GetRecentRouteRequest(status:number): Observable<Route[]> {
    debugger;
    this.url = this.appURL + '/route/RecentRouteRequest/?status='+ status;
    return this.http.get<Route[]>(this.url);
  }
  GetRecentRouteRequestDetails(rrID:number): Observable<RouteRequestDetail[]> {
    debugger;
    this.url = this.appURL + '/route/RecentRouteRequestDetails/?rrID='+ rrID;
    return this.http.get<RouteRequestDetail[]>(this.url);
  }

  CreateRoute(data: DefaultRoute[], type: string, requestFor:number, userID: string): Observable<any> {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if(Number(data[i].requestedRoute)>Number(0))
      {
      arr.push(data[i])
      }
    }
    this.url = this.appURL + '/route/RouteRequest';
    const album = {
      dataObj: arr,
      Requesttype: type,
      userID: userID,
      slotID:requestFor
    }
    return this.http.post<any>(this.url, album, this.appHeader);
  }

  ApproveRouteRequest(data: RouteRequestDetail[], rrID: number,approvedBy:number,status:number): Observable<any> {
    this.url = this.appURL + '/route/Approve';
    const Objdata = {
      dataObj: data,
      rrID: rrID,
      approvedBy:approvedBy,
      status:status
    }
    return this.http.post<any>(this.url, Objdata, this.appHeader);
  }
}
