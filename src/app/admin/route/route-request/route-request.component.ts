import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { pincode } from 'src/app/Modals/pincode';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouteService } from 'src/app/Service/route.service';
import { DropDown } from 'src/app/Modals/dropdown';
import { DefaultRoute } from 'src/app/Modals/defaultRoute';
import { LoggedUserService } from 'src/app/Service/logged-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-request',
  templateUrl: './route-request.component.html',
  styleUrls: ['./route-request.component.scss'],
  providers: [DatePipe]
})
export class RouteRequestComponent implements OnInit {
  myDate = new Date();
  userID: string;
  requestForObjs: DropDown[];
  defaultRouteObjs: DefaultRoute[];
  isShown: boolean = false;
  requestTypeVal: string;
  slotID:number;
  constructor(private datePipe: DatePipe,
    private toastr: ToastrService,
    private SpinnerService: NgxSpinnerService,
    private _route: RouteService,
    private _loggedUserService: LoggedUserService,
    private router: Router) {
    this.myDate = this.myDate; //this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.validateUser();
    this.userID = this._loggedUserService.getUserId();
    if (this.userID != null) {
      this.loadRequestFor();
      this.loadDefaultRoute();
    }
  }
  validateUser() {
    if (this._loggedUserService.getUserId() == null) {
      //redirection to login for error
      this.router.navigate(["/"]);
    }
  }
  radioChange(ev) {
    this.requestTypeVal = ev;
    if (ev == "N") {
      this.isShown = true;
    }
    else {
      this.isShown = false;
    }
  }
  loadRequestFor() {
    //debugger;
    this.SpinnerService.show();
    this._route.GetRequestFor().subscribe(
      data => {
        this.requestForObjs = data;
        this.SpinnerService.hide();
      },
      error => {
        this.SpinnerService.hide();
      }
    );
  }

  loadDefaultRoute() {
    this.SpinnerService.show();
    this._route.GetDefaultRoute().subscribe(
      data => {
        this.defaultRouteObjs = data;
        // this.defaultRouteObjs.forEach(element => {
        //   element.userID=Number(this.userID);
        // });
        this.SpinnerService.hide();
      },
      error => {
        this.SpinnerService.hide();
      }
    );
  }
  onSlotChange(ev){
    this.slotID=ev.value;
  }

  CreateRouteRequest() {
    if (this.requestTypeVal != null || this.requestTypeVal != undefined) {
      if(this.requestTypeVal =="N" )
      { 
        if(Number(this.slotID)==Number(0) || this.slotID==undefined)
        {
          this.toastr.error("Please Select Slot !!", "");
            return;
        }
        let arr = [];
        for (let i = 0; i < this.defaultRouteObjs.length; i++) {
          if(Number(this.defaultRouteObjs[i].requestedRoute)>Number(0))
          {
             arr.push(this.defaultRouteObjs[i])
          }
        }
        if(arr.length>0)
        {
        this._route.CreateRoute(arr, this.requestTypeVal,this.slotID, this.userID).subscribe(
          respons => {
            this.toastr.success(respons[0].responseMsg, "");
          },
          error => {
            this.toastr.error(error.msg, "");
          }
        );
        }
        else{
          this.toastr.error("Select Atleast One Route !!", "");
        }
      }
    
    }
    else{
      this.toastr.error("Please Select Request Type !!", "");
    }
  }

}
