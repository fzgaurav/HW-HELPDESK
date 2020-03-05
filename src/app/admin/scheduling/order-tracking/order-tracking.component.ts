import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { IVROrderDetails } from 'src/app/Modals/customerOrder';
import { IVRService } from 'src/app/Service/ivr.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss']
})
export class OrderTrackingComponent implements OnInit {
  // totalOrderDetailObjs: IVROrderDetails[];
  // displayedColumns: string[] =  ['SNo.','OrderNo', 'CustomerName', 'Product','Price','IvrStatus'];
  // dataSource = new MatTableDataSource<IVROrderDetails>();
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

   constructor(//private _ivr: IVRService,
  //   private toastr: ToastrService,
  //   private SpinnerService: NgxSpinnerService,
  //   private dialogRef: MatDialogRef<OrderTrackingComponent>,
    //@Inject(MAT_DIALOG_DATA) data: any
    ) {
     
    }

    close() {
      //this.dialogRef.close(null);
    }

  ngOnInit() {
    // this.SpinnerService.show();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    //this.loadTodaysOrder("2020/01/21");
  }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  // loadTodaysOrder(date) {
  //   this._ivr.GetIVRTotalOrder(date).subscribe(
  //     data => {
  //       this.totalOrderDetailObjs = data;
  //       //console.log(data);
  //       this.dataSource.data = this.totalOrderDetailObjs;
  //       this.SpinnerService.hide();
  //     },
  //     error => {
  //       this.toastr.error("Try Again !!");
  //       this.SpinnerService.hide();
  //     }
  //   );

  // }
}



