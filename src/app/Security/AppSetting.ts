import { HttpHeaders } from '@angular/common/http';

export class AppSetting {

    static API_URL: string = "http://localhost:50661/";
  
    static HTTTP_OPTION: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  
  }