import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { StartDayComponent } from './start-day/start-day.component';
import { EndDayComponent } from './end-day/end-day.component';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StartDayComponent } from './start-day/start-day.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestparentComponent } from './testparent/testparent.component';
import { StartdaytestComponent } from './testparent/startdaytest/startdaytest.component';
import { StartDayChildComponent } from './dashboard/start-day-child/start-day-child.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TestRouteComponent } from './test-route/test-route.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectDialogComponent } from './end-day/project-dialog/project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EndDayComponent,
    ReportComponent,
    LoginComponent,
    StartDayComponent,
    DashboardComponent,
    routingComponents,
    TestparentComponent,
    StartdaytestComponent,
    StartDayChildComponent,
    SignUpComponent,
    ChangePasswordComponent,
    TestRouteComponent,
    DialogComponent,
    ProjectDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    // MatDialog,
    // MAT_DIALOG_DATA, MatDialogRef


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  

  }


 
