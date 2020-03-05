export class IVRTracking{
    TotalOrder:number;
    PendingAttempt:number;
    Attempt:number;
    Verified:number;
    NoAnswer:number;
    CallToCustomerCare:number;
    CallByIVR:number;  
}

export class IVROrderDetails{
    orderID:number;
    orderNo:string;
    customerName:number;
    product:string;
    price:string;
    ivrStatus:string;
}
export class IVRPendingAttempt{
    orderID:number;
    orderNo:string;
    customerName:number;
    product:string;
    price:string;
    ivrStatus:string;
}