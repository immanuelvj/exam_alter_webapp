import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppService } from './app.service';
import { FacultyScheduleComponent } from './faculty-schedule/faculty-schedule.component';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';

import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminModule } from './admin/admin.module';
import { LoginGuardService } from './login.guard';
import { RouteGuardService } from './route.guard';

@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    FacultyScheduleComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    AdminModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent, canActivate:[LoginGuardService]},
      { path:'', redirectTo: 'login',pathMatch:'full'},
      {path:'faculty_schedule',component:FacultyScheduleComponent},
      {path:'dashboard',component:DashboardComponent,canActivate:[RouteGuardService]},
      
      
    ]),
    HttpClientModule,
  ],
  providers: [AppService,LoginGuardService,RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
