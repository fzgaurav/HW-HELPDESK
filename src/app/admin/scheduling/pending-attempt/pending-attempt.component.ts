import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IVRService } from 'src/app/Service/ivr.service';
import { IVRPendingAttempt } from 'src/app/Modals/customerOrder';

@Component({
  selector: 'app-pending-attempt',
  templateUrl: './pending-attempt.component.html',
  styleUrls: ['./pending-attempt.component.scss']
})
export class PendingAttemptComponent implements OnInit {
IvrPendingAttemptObjs:IVRPendingAttempt[]
displayedColumns: string[] =  ['SNo.','MobileNo','OrderNo', 'CustomerName', 'Product','Price','Status'];
  dataSource = new MatTableDataSource<IVRPendingAttempt>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private toastr:ToastrService,
    private SpinnerService:NgxSpinnerService,
    private dialogRef: MatDialogRef<PendingAttemptComponent>,
    private _ivr:IVRService,
    @Inject(MAT_DIALOG_DATA) data: any

  ) { }

  close() {
    this.dialogRef.close(null);
  }

  ngOnInit() {
    this.SpinnerService.show();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadPendingIVRAttempt(0,"","",0);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadPendingIVRAttempt(status:number,orderNo:string,customerName:string,type:number)
  {
    this._ivr.GetIVRPendingAttempt(status,orderNo,customerName,type).subscribe(
      data=>{
        //console.log(data);
          this.IvrPendingAttemptObjs=data;
          this.dataSource.data = this.IvrPendingAttemptObjs;
          this.SpinnerService.hide();
      },
      error=>{
          this.toastr.error("Try Again !!");
          this.SpinnerService.hide();
      }
    );
  }

}
