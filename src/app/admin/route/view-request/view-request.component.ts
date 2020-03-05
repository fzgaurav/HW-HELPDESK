import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouteService } from 'src/app/Service/route.service';
import { Route } from 'src/app/Modals/routeRequest';
import { ActivatedRoute } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { RequestDetailComponent } from '../request-detail/request-detail.component';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent implements OnInit {
  recentRequestObjs:Route[];
  displayedColumns: string[] =  ['SNo.','requestNo', 'userName','requestDate','totalRouteRequested','requestStatus','Action'];
  dataSource = new MatTableDataSource<Route>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private toastr: ToastrService,
    private SpinnerService: NgxSpinnerService,
    private _route:RouteService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadRecentRouteRequest(0);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onStatusChangeEvent(ev)
  {
    if(Number(ev.value)>=Number(0))
    this.loadRecentRouteRequest(ev.value);
  }

  viewRouteRequestDetails(entityObj: Route)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = entityObj;
    dialogConfig.width = "850px";
    let dialogRef = this.dialog.open(RequestDetailComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(returnObj => {
      //debugger;
      if (returnObj) {
        this.loadRecentRouteRequest(0);
      }

    });
  }
  loadRecentRouteRequest(status:number)
  {
    this.SpinnerService.show(); 
    //debugger;
    this._route.GetRecentRouteRequest(status).subscribe(
      data=>{
        this.recentRequestObjs = data;
        this.dataSource.data = this.recentRequestObjs;
        this.SpinnerService.hide();  
            },
            error=>{
              this.toastr.error("");
              this.SpinnerService.hide();  
            }
    );
  }

}
