import { Component, OnInit } from '@angular/core';
import { UserMenuService } from 'src/app/Service/user-menu.service';
import { FormsModule } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { UserMenu } from 'src/app/Modals/userMenu';
import { UserRolesService } from 'src/app/Service/user-roles.service';
import { UserRoles } from 'src/app/Modals/role';
import { MenuData } from 'src/app/Modals/MenuData';
import { MenuDataService } from 'src/app/Service/menu-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-assign-menu',
  templateUrl: './assign-menu.component.html',
  styleUrls: ['./assign-menu.component.scss']
})
export class AssignMenuComponent implements OnInit {
  userMenuObjs: UserMenu[];
  roleObjs: UserRoles[];
  roleID: number;
  isViewAll: boolean = false;
  isEditAll: boolean = false;
  isEnableDisableAll: boolean = false;
  isShowAll: boolean = false;
  private menucredential: MenuDataService;
  constructor(private _userMenuService: UserMenuService,
    private _userRoles: UserRolesService,
    private SpinnerService: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loadRoles();
  }

  loadMenuRoleWise(roleID) {
    this._userMenuService.getMenuByRoleID(roleID).subscribe(response => {
      this.userMenuObjs = response;
    },
      error => console.log("Error (GetData) :: " + error)
    );
  }
  //****Bind Roles ****/
  loadRoles() {
    this._userRoles.getActiveRoleID().subscribe(response => {
      console.log(response);
      this.roleObjs = response;
    },
      error => console.log("Error (GetData) :: " + error)
    )
  }
  onChangeEvent(ev) {
    if (parseInt(ev.target.value) > 0) {
      this.roleID = ev.target.value;
      this.loadMenuRoleWise(ev.target.value);
    }
    else {

    }
  }
  CheckUncheckViewAll() {
    for (var i = 0; i < this.userMenuObjs.length; i++) {
      if (this.isViewAll == true) {
        this.userMenuObjs[i].IsView = true;
      }
      else {
        this.userMenuObjs[i].IsView = false;
      }
    }
  }
  CheckUncheckEditAll() {
    for (var i = 0; i < this.userMenuObjs.length; i++) {
      if (this.isEditAll == true) {
        this.userMenuObjs[i].IsEdit = true;
      }
      else {
        this.userMenuObjs[i].IsEdit = false;
      }
    }
  }
  CheckUncheckEDAll() {
    for (var i = 0; i < this.userMenuObjs.length; i++) {
      if (this.isEnableDisableAll == true) {
        this.userMenuObjs[i].IsenableDisable = true;
      }
      else {
        this.userMenuObjs[i].IsenableDisable = false;
      }
    }
  }
  CheckUncheckShowAll() {
    for (var i = 0; i < this.userMenuObjs.length; i++) {
      if (this.isShowAll == true) {
        this.userMenuObjs[i].isActive = true;
      }
      else {
        this.userMenuObjs[i].isActive = false;
      }
    }
  }
  // handleSelected(ev, moduleID, pageID) {
  //   if (ev.target.checked == true) {

  //   }
  //   //console.log(ev.target.checked)
  // }

  errorsmsg(msg) {
    this.toastr.error(msg, 'Login');
  }

  GetData() {
    this.SpinnerService.show();
    let arr = [];
    for (let i = 0; i < this.userMenuObjs.length; i++) {
      arr.push(this.userMenuObjs[i])
    }
    this._userMenuService.InsertMenu(arr).subscribe(
      respons => {
        this.SpinnerService.hide();
        this.toastr.success(respons[0].responseMsg, "Menu");
      },
      error => {
        this.toastr.error(error.msg, "Menu");
      }
    );

  }

  onClickMenuUpdate(item) {
    const menucredential = {
      MpID: item.MpID,
      ModuleID: item.ModuleID,
      PageID: item.PageID,
      PageName: item.PageName,
      ModuleName: item.ModuleName,
      IsView: item.IsView,
      IsEdit: item.IsEdit,
      IsenableDisable: item.IsenableDisable,
      isActive: item.isActive,
      RoleID: this.roleID
    }
  }

}
