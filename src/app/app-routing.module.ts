import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';


const routes: Routes = [
  {    
    path: '',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },  
  {
    path: 'admin', component: AdminlayoutComponent,
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


