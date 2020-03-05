import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoggedUserService } from 'src/app/Service/logged-user.service';
import { district } from 'src/app/Modals/district';
import { DistrictService } from 'src/app/Service/district.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-view-district',
  templateUrl: './view-district.component.html',
  styleUrls: ['./view-district.component.scss']
})
export class ViewDistrictComponent implements OnInit {
  displayedColumns: string[] = ['SNo.', 'city_name', 'defaultRoute', 'CircleName', 'IsActive'];
  dataSource = new MatTableDataSource<district>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  result: string = '';
  DistrictObjs: district[];
  districtObj: district;
  loggedUser: any;
  constructor(
    private toastr: ToastrService,
    private dialog: MatDialog,
    private _loggedUserService: LoggedUserService,
    private _district: DistrictService,
    private formbulider: FormBuilder,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loggedUser = {
      userId: this._loggedUserService.getUserId()
    }

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadDistrict();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadDistrict() {
    this.SpinnerService.show();
    this._district.GetDistrict()
      .subscribe(respons => {
        this.DistrictObjs = respons;
        this.dataSource.data = this.DistrictObjs;
        this.SpinnerService.hide();
      },
        error => {
          console.log("Error (GetData) :: " + error);
          this.SpinnerService.hide();
        }

      );
  }

  confirmDialog(): void {
    const message = 'Are you sure you want to do this?';
    const heading = 'Change Status';
    const dialogData = new ConfirmDialogModel(heading, message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }
}
