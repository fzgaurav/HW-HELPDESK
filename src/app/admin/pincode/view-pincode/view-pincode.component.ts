import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { pincode } from 'src/app/Modals/pincode';
import { pincodeData } from 'src/app/Modals/pincodeData';
import { ToastrService } from 'ngx-toastr';
import { PincodeService } from 'src/app/Service/pincode.service';
import { NgxSpinnerService } from "ngx-spinner"; 
@Component({
  selector: 'app-view-pincode',
  templateUrl: './view-pincode.component.html',
  styleUrls: ['./view-pincode.component.scss']
})
export class ViewPincodeComponent implements OnInit {
  pincodeObjs:pincodeData[];
  displayedColumns: string[] =  ['SNo.','pincode', 'District', 'state','circle','Status_Info'];
  dataSource = new MatTableDataSource<pincodeData>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private toastr: ToastrService,
              private _pincode:PincodeService,
              private SpinnerService: NgxSpinnerService
            ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadPincode();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadPincode(){
    this.SpinnerService.show(); 
    debugger;
    this._pincode.GetPincode().subscribe(
      data=>{
        this.pincodeObjs = data;
        console.log(data);
        this.dataSource.data = this.pincodeObjs;
        this.SpinnerService.hide();  
            },
            error=>{
              this.toastr.error("");
              this.SpinnerService.hide();  
            }
            
    );
  }

}
