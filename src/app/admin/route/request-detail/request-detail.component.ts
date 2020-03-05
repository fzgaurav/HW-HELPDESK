import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RouteRequestDetail, Route } from 'src/app/Modals/routeRequest';
import { RouteService } from 'src/app/Service/route.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoggedUserService } from 'src/app/Service/logged-user.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  requestDetailsObjs: RouteRequestDetail[];
  requestDetailsObj: Route;
  rrid: number;
  userID: number;
  private isButtonVisible = true;
  constructor(
    private _route: RouteService,
    private SpinnerService: NgxSpinnerService,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<RequestDetailComponent>,
    private _loggedUserService: LoggedUserService,
    @Inject(MAT_DIALOG_DATA) data: Route
  ) {
    this.requestDetailsObj = data;
    if(Number(this.requestDetailsObj.requestStatus)==0)
    {
      this.isButtonVisible = true;
    }
    else{
      this.isButtonVisible = false;
    }
    //alert(this.requestDetailsObj.requestStatus);
  }

  ngOnInit() {
    this.loadRequestDetails();
  }



  close() {
    this.dialogRef.close(null);
  }

  loadRequestDetails() {
    debugger;
    if (this.requestDetailsObj != null && this.requestDetailsObj != undefined) {
      this.SpinnerService.show();
      this._route.GetRecentRouteRequestDetails(this.requestDetailsObj.rrID).subscribe(
        data => {
          this.requestDetailsObjs = data;
          this.requestDetailsObjs.map((todo, i) => {
            this.requestDetailsObjs[i].isApproved = false;
          })
          this.SpinnerService.hide();
        },
        error => {
          this.toastr.error("");
          this.SpinnerService.hide();
        }
      );
    }
  }


  ApprovedRequest(name: string) {
    if (confirm("Are you sure to Approve " + name)) {
      this.userID = Number(this._loggedUserService.getUserId());
      let arr = [];
      for (let i = 0; i < this.requestDetailsObjs.length; i++) {
        if (Number(this.requestDetailsObjs[i].ApprovedRoute) > Number(0)) {
          arr.push(this.requestDetailsObjs[i])
        }
      }
      if (arr.length > 0) {
        this._route.ApproveRouteRequest(arr, this.requestDetailsObj.rrID, this.userID, 1).subscribe(
          respons => {
            this.toastr.success(respons[0].responseMsg);
            this.dialogRef.close(null);
          },
          error => {
            this.toastr.error(error.msg, "");
          }
        );
      }
      else {
        this.toastr.error("No Data For Approved !!", "");
      }
      //console.log(arr);
    }
  }
}
