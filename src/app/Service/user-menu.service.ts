import { Injectable } from '@angular/core';
import { AppSetting } from '../Security/AppSetting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserMenu } from '../Modals/userMenu';
import { Observable } from 'rxjs';
import { MenuData } from '../Modals/MenuData';
import { MenuDataService } from './menu-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserMenuService {
  appURL: string = AppSetting.API_URL + "api/Menu";
  data:string;
  appHeader: any = AppSetting.HTTTP_OPTION;
  url: string;
  constructor(private http: HttpClient) { }
  getMenuByRoleID(roleID: number): Observable<UserMenu[]> {
    return this.http.get<UserMenu[]>(this.appURL + '/getMenuByRoleID/?roleID=' + roleID);
  }
  getDynamicMenu(roleID: number): Observable<any> {
    return this.http.get<any>(this.appURL + '/showDynamicMenu/?roleID=' + roleID);
  }
  InsertMenu(Menu:MenuDataService[]): Observable<any> {
    this.url = this.appURL + '/INSERT'
    return this.http.post<any>(this.url, Menu, this.appHeader);
  }
}
