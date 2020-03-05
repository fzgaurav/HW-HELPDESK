import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Route } from 'src/app/Modals/routeRequest';

@Component({
  selector: 'app-view-phlebo',
  templateUrl: './view-phlebo.component.html',
  styleUrls: ['./view-phlebo.component.scss']
})
export class ViewPhleboComponent implements OnInit {
  recentRequestObjs:Route[];
  displayedColumns: string[] =  ['SNo.','requestNo', 'userName','helpdesk','prefrence1','prefrence2','prefrence3','Edit','Action'];
  dataSource = new MatTableDataSource<Route>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit() {
  }

}
