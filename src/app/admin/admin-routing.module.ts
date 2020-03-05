import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDistrictComponent } from './district/add-district/add-district.component';
import { AddroleComponent } from './role/addrole/addrole.component';
import { ViewroleComponent } from './role/viewrole/viewrole.component';
import { AssignMenuComponent } from './menu/assign-menu/assign-menu.component';
import { ViewDistrictComponent } from './district/view-district/view-district.component';
import { AddPincodeComponent } from './pincode/add-pincode/add-pincode.component';
import { ViewPincodeComponent } from './pincode/view-pincode/view-pincode.component';
import { RouteRequestComponent } from './route/route-request/route-request.component';
import { ViewRequestComponent } from './route/view-request/view-request.component';
import { ApproveRequestComponent } from './route/approve-request/approve-request.component';
import { RequestDetailComponent } from './route/request-detail/request-detail.component';
import { AddRouteComponent } from './district/add-route/add-route.component';
import { IvrCallTrackingComponent } from './scheduling/ivr-call-tracking/ivr-call-tracking.component';
import { OrderTrackingComponent } from './scheduling/order-tracking/order-tracking.component';
import { PendingAttemptComponent } from './scheduling/pending-attempt/pending-attempt.component';
import { TotalOrderComponent } from './scheduling/total-order/total-order.component';
import { OrderInformationComponent } from './scheduling/order-information/order-information.component';
import { AddPhleboComponent } from './manpower/add-phlebo/add-phlebo.component';
import { ViewPhleboComponent } from './manpower/view-phlebo/view-phlebo.component';


const routes: Routes = [
  { path: '',  component: DashboardComponent },
  { path: 'dashboard',  component: DashboardComponent },
  /*Master Start*/
  { path: 'district/add',  component: AddDistrictComponent },
  { path: 'district/view',  component: ViewDistrictComponent },
  { path: 'pincode/add',  component: AddPincodeComponent },
  { path: 'pincode/view',  component: ViewPincodeComponent },
  { path: 'district/addRoute',  component: AddRouteComponent },
  /*Master End*/
  { path: 'role/add',  component: AddroleComponent },
  { path: 'role/add',  component: ViewroleComponent },
  { path: 'assignMenu',  component: AssignMenuComponent },
  /*Route Request Start*/
  { path: 'route/request',  component: RouteRequestComponent },
  { path: 'route/view',  component: ViewRequestComponent },
  { path: 'route/approval',  component: ApproveRequestComponent },
  { path: 'route/requestDetails',  component: RequestDetailComponent },
  /*Route Request End*/
  { path: 'scheduling/ivrcall',  component: IvrCallTrackingComponent },
  { path: 'scheduling/totalorder',  component: TotalOrderComponent },
  { path: 'scheduling/pendingattempt',  component: PendingAttemptComponent },
  { path: 'scheduling/ordertracking',  component: OrderTrackingComponent },
  { path: 'scheduling/orderinformation',  component: OrderInformationComponent },
  /*Manpower Start */
  {path:'manpower/addphlebo',component:AddPhleboComponent},
  {path:'manpower/viewphlebo',component:ViewPhleboComponent}
  /*Manpower End*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
