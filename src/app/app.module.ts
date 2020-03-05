
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './Service/LoginService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginCredentialService } from './Service/login-credential.service';
import { LoggedUserService } from './Service/logged-user.service';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { MaterialModule } from './_core/material.module';   
import { ToastrModule } from 'ngx-toastr'; 
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminlayoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    AdminRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    NgxSpinnerModule,  
    ToastrModule.forRoot({
      closeButton: true
    }),
  
  ],
  
  providers: [
    LoginService,
    LoginCredentialService,
    LoggedUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
