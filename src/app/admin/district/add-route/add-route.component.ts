import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { district } from 'src/app/Modals/district';
//import { ToastrService } from 'ngx-toastr';
import { LoggedUserService } from 'src/app/Service/logged-user.service';
import { DistrictService } from 'src/app/Service/district.service';
//import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UpdateRouteComponent } from '../update-route/update-route.component';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.scss']
})
export class AddRouteComponent implements OnInit {

  displayedColumns: string[] =  ['SNo.','city_name', 'defaultRoute', 'CircleName','IsActive','Action'];
  dataSource = new MatTableDataSource<district>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  DistrictObjs: district[];
  districtObj: district;
  loggedUser:any;
  constructor(
    private dialog: MatDialog,
    private _loggedUserService: LoggedUserService,
    private _district:DistrictService,
    private SpinnerService :NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loggedUser={
      userId: this._loggedUserService.getUserId()
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadDistrict();
    this.districtObj=new district();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  loadDistrict(){
    this.SpinnerService.show();
    this._district.GetDistrict()
      .subscribe(respons => {
        debugger;
        this.DistrictObjs = respons;        
        this.dataSource.data = this.DistrictObjs;
        this.SpinnerService.hide();
      },
        error => {console.log("Error (GetData) :: " + error);
        this.SpinnerService.hide();
      }
      );
  }

  addDefaultRoute(entityObj: district) {
    this.districtObj.city_id = entityObj.city_id;
    this.districtObj.defaultRoute = entityObj.defaultRoute;
    this.districtObj.city_name = entityObj.city_name;
    this.districtObj.IsActive = entityObj.IsActive;
    this.districtObj.CircleId = 0;
    this.districtObj.city_s_name=entityObj.city_name;
    this.districtObj.state_s_id=0;
    this.districtObj.status_info1=0;
    this.openDialog4InsertUpdate(entityObj);
  }

  openDialog4InsertUpdate(entityObj: district) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = entityObj;
    dialogConfig.width = "520px";
    let dialogRef = this.dialog.open(UpdateRouteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(returnObj => {
      if (returnObj) {
        this.loadDistrict();
      } 

    });

  }

}
