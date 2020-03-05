import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginCredentialService {

  userName: string;
  password:string;
  ipAddress: string;
  tokenID:string;
  constructor(userName:string,password:string,ipAddress:string,tokenID:string) {
      this.userName=userName;
      this.password=password;
      this.ipAddress=ipAddress;
      this.tokenID=tokenID;
  }
}
