import { Component, OnInit, ViewChild } from '@angular/core';
import { IVRService } from 'src/app/Service/ivr.service';
import { IVRTracking } from 'src/app/Modals/customerOrder';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { OrderTrackingComponent } from '../order-tracking/order-tracking.component';
import { PendingAttemptComponent } from '../pending-attempt/pending-attempt.component';

@Component({
  selector: 'app-ivr-call-tracking',
  templateUrl: './ivr-call-tracking.component.html',
  styleUrls: ['./ivr-call-tracking.component.scss']
})
export class IvrCallTrackingComponent implements OnInit {
  displayedColumns: string[] =  ['SNo.','TotalOrder', 'PendingAttempt', 'Attempt','Verified','NoAnswer','CallToCustomerCare','CallByIVR'];
  dataSource = new MatTableDataSource<IVRTracking>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 IVRObjs:IVRTracking[];
  constructor(
    private _IVR:IVRService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadIVRCallTracking("2020/01/21");
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // viewTotalOrderDetails()
  // {
  //   //debugger;
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.data = null;
  //   dialogConfig.width = "850px";
  //   let dialogRef = this.dialog.open(OrderTrackingComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe(returnObj => {
  //     debugger;
  //     if (returnObj) {
  //     }
  //   });
  // }

  viewPendingAttempt()
  {
    debugger;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = null;
    dialogConfig.width = "850px";
    let dialogRef = this.dialog.open(PendingAttemptComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(returnObj => {
      debugger;
      if (returnObj) {
       
      }

    });
  }
  loadIVRCallTracking(date)
  {
    this._IVR.GetIVRCallTracking(date).subscribe(
      data=>{
        debugger;
        this.IVRObjs = data;        
        this.dataSource.data = this.IVRObjs;
      },
      error=>{

      }
    );
  }

}
