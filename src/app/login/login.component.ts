import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../Service/LoginService';
import { LoginCredentialService } from 'src/app/Service/login-credential.service';
import { LoggedUserService } from '../Service/logged-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';   
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  form: any = {};  
  errorMessage:string; 
  roleName:string;
  private loginCredential:LoginCredentialService;
  
  constructor(private router:Router,
              private formBuilder: FormBuilder,
              private LoginService:LoginService,
              private tokenStorage: LoggedUserService,
              private toastr: ToastrService
              ) { } 
  ngOnInit() {
      //this.successmsg();
      // this.roleName = this.tokenStorage.getRoleName();
      this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  
  errorsmsg(msg){  
    this.toastr.error(msg,'Login'); 
  
  }  
  

  onSubmit(){ 
    
    if (this.loginForm.invalid) {
      return;
    }
    else {
      console.log(this.loginForm);
      debugger; 
      var data = this.loginForm.value;  
      this.loginCredential = new LoginCredentialService(
      data.username,
      data.password,
      "192.168.1.1",
      "xuzyzyz");  
    this.LoginService.Login(this.loginCredential).subscribe(    
      data => {    
        if(data.Msg=="success")    
        {     console.log(data);
            this.tokenStorage.saveUserId(data.userData[0].userID);              
            this.tokenStorage.saveRoleName(data.userData[0].roleName);
            this.tokenStorage.saveDailerID(data.userData[0].dailerID);
            this.tokenStorage.saveRoleId(data.userData[0].roleID);
            this.tokenStorage.saveUsername(data.userData[0].userName);          
            this.router.navigate(['/admin']);  
           
        }   
        else{    
         
          this.errorsmsg("Invalid Credentials !!");    
        }    
      },    
      error => {   
        console.log('Login Error ' + error.name);
        this.errorMessage = error.Msg;    
      });  
    }  
      
  };    

}
