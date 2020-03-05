import { Injectable } from '@angular/core';
import { AppSetting } from '../Security/AppSetting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRoles } from '../Modals/role';
import { UserMenuService } from './user-menu.service';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {
  appURL: string = AppSetting.API_URL + "api/";
  appHeader:any=AppSetting.HTTTP_OPTION;
  url:string;
  constructor(private http:HttpClient) { }
  getActiveRoleID(): Observable<UserRoles[]>
  {
    debugger;
    return this.http.get<UserRoles[]>(this.appURL + 'Role/getActiveRoles');
  }

  InsertMenu(userMenu : UserMenuService): Observable<any>{  
    debugger; 
    this.url=this.appURL+'/Menu/InsertMenuByRoleID';
    console.log(this.url);
    debugger;
    return this.http.post<any>(this.url,userMenu,this.appHeader); 
  } 
}
