import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { AppSetting } from '../Security/AppSetting';
import { LoginCredentialService } from './login-credential.service';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  appURL: string = AppSetting.API_URL + "api";
  appHeader: any = AppSetting.HTTTP_OPTION;
  url:string; 

  constructor(private http : HttpClient) {     
  }  

  Login(logincredential : LoginCredentialService): Observable<any>{  
       debugger; 
       console.log(logincredential);
       this.url=this.appURL+'/Login';
       console.log(this.url);
       debugger;
     return this.http.post<any>(this.url,logincredential,this.appHeader); 
  }  
}