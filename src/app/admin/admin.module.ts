import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../_core/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDistrictComponent } from './district/add-district/add-district.component';
import { AddroleComponent } from './role/addrole/addrole.component';
import { ViewroleComponent } from './role/viewrole/viewrole.component';
import { AssignMenuComponent } from './menu/assign-menu/assign-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDistrictComponent } from './district/view-district/view-district.component';
import { AddPincodeComponent } from './pincode/add-pincode/add-pincode.component';
import { ViewPincodeComponent } from './pincode/view-pincode/view-pincode.component'
import { NgxSpinnerModule } from "ngx-spinner";
import { RouteRequestComponent } from './route/route-request/route-request.component';
import { ViewRequestComponent } from './route/view-request/view-request.component';
import { ApproveRequestComponent } from './route/approve-request/approve-request.component';
import { RequestDetailComponent } from './route/request-detail/request-detail.component';
import { AddRouteComponent } from './district/add-route/add-route.component';
import { UpdateRouteComponent } from './district/update-route/update-route.component';
import { IvrCallTrackingComponent } from './scheduling/ivr-call-tracking/ivr-call-tracking.component';
import { OrderTrackingComponent } from './scheduling/order-tracking/order-tracking.component';
import { TotalOrderComponent } from './scheduling/total-order/total-order.component';
import { PendingAttemptComponent } from './scheduling/pending-attempt/pending-attempt.component';
import { ConfirmDialogComponent } from './district/confirm-dialog/confirm-dialog.component';
import { AddPhleboComponent } from './manpower/add-phlebo/add-phlebo.component';
import { ViewPhleboComponent } from './manpower/view-phlebo/view-phlebo.component';
import { OrderInformationComponent } from './scheduling/order-information/order-information.component';
import { HttpClientModule } from '@angular/common/http';
import { PhleboDetailsComponent } from './manpower/phlebo-details/phlebo-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddDistrictComponent,
    AddroleComponent,
    ViewroleComponent,
    AssignMenuComponent,
    ViewDistrictComponent,
    AddPincodeComponent,
    ViewPincodeComponent,
    RouteRequestComponent,
    ViewRequestComponent,
    ApproveRequestComponent,
    RequestDetailComponent,
    AddRouteComponent,
    UpdateRouteComponent,
    IvrCallTrackingComponent,
    OrderTrackingComponent,
    TotalOrderComponent,
    PendingAttemptComponent,
    ConfirmDialogComponent,
    AddPhleboComponent,
    ViewPhleboComponent,
    OrderInformationComponent,
    PhleboDetailsComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  exports: [
    //AppMaterialModule
  ],
  entryComponents:[
    UpdateRouteComponent,
    PendingAttemptComponent,
    ConfirmDialogComponent
  ]
})
export class AdminModule { }
