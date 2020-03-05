import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/Service/logged-user.service';
import { UserMenu } from 'src/app/Modals/userMenu';
import { UserMenuService } from 'src/app/Service/user-menu.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.scss']
})
export class AdminlayoutComponent implements OnInit {
  loggedUser: any;
  AlldynamicMenuObjs: UserMenu[];
  dynamicMenuObjs: UserMenu[];
  dynamicSubMenuObjs: UserMenu[];
  constructor(private router: Router,
    private _loggedUserService: LoggedUserService,
    private SpinnerService: NgxSpinnerService,
    private _userMenuService: UserMenuService,
  ) { }
  ngOnInit() {
    this.validateUser();
    this.loggedUser = {
      dailerID: this._loggedUserService.getDailerID(),
      roleID: this._loggedUserService.getRoleId(),
      roleName: this._loggedUserService.getRoleName(),
      username: this._loggedUserService.getUserName(),
      userID: this._loggedUserService.getUserId(),
    };
    this.loadMenuRoleWise(29);
  }

  loadMenuRoleWise(roleID) {
    this.SpinnerService.show();
    this._userMenuService.getDynamicMenu(roleID).subscribe(response => {
      this.AlldynamicMenuObjs = response;
      this.SpinnerService.hide();
    },
      error => console.log("Error (GetData) :: " + error)
    );
  }

  validateUser() {
    if (this._loggedUserService.getUserId() == null) {
      //redirection to login for error
      this.router.navigate(["/"]);
    }
  }

  logout() {
    this._loggedUserService.signOut();
    //redirection to home
    this.router.navigate(["/"]);
  }
}
