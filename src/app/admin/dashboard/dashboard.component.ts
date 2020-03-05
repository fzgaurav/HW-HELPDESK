import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/Service/logged-user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router,private _loggedUserService:LoggedUserService) { }
  ngOnInit() {
    this.validateUser();
   
  }
  validateUser(){
    if(this._loggedUserService.getUserId() == null){
     //redirection to login for error
     this.router.navigate(["/"]);
    }
    else{
      this.router.navigate(["/admin/dashboard"]);
    }
  }
}
