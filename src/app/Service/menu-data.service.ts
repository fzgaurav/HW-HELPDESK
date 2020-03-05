import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  MpID: number;
  ModuleID: number;
  PageID:number;
  ModuleName: string;
  PageName:string;
  IsView:boolean;
  IsEdit:boolean;
  IsenableDisable:boolean;
  isActive:boolean;
  RoleID:number;
  constructor( MpID: number,
    ModuleID: number,
    PageID:number,
    ModuleName: string,
    PageName:string,
    IsView:boolean,
    IsEdit:boolean,
    IsenableDisable:boolean,
    isActive:boolean,
     RoleID:number) {
      this.MpID=MpID;
      this.ModuleID=ModuleID;
      this.PageID=PageID;
      this.ModuleName=ModuleName;
      this.PageName=PageName;
      this.IsView=IsView;
      this.IsEdit=IsEdit;
      this.IsenableDisable=IsenableDisable;
      this.isActive=isActive;
      this.RoleID=RoleID;
     }
}
