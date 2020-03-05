export class RouteRequest {
    rsmID: number;
    requestBY: number;
    requestType: string;
    requestStatus: number;
    districtID: number;
    requestRoute: number;
    isRequest: boolean;
}
export class Route {
    rrID: number;
    rsmID: number;
    requestNo: string;
    requestDate: string;
    userName: string;
    requestBY: number;
    requestType: string;
    requestStatus: number;
    requestApprovedBY: number;
    requestApprovedDate: string;
    totalRouteRequested: number;
}
export class RouteRequestDetail{
    RriD:number;
    RmID:number;
    District:string;
    DistrictID:number;
    DefaultRoute:number;
    LastCycleApproved:number;
    RequestRoute:number;
    ApprovedRoute:number;
    isApproved:boolean;
}