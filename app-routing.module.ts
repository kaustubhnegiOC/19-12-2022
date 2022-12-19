import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartDayChildComponent } from './dashboard/start-day-child/start-day-child.component';
import { EndDayComponent } from './end-day/end-day.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { StartDayComponent } from './start-day/start-day.component';
import {TestRouteComponent} from './test-route/test-route.component'

// children:[{
//   path:'dashboard/start-day-child', component:StartDayChildComponent
//  }]

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent
   },
  {path:'startday',component:StartDayComponent},
  {path:'endday', component:EndDayComponent},
  {path:'report', component:ReportComponent},
  {path:'testroute', component:TestRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,StartDayComponent,ReportComponent,EndDayComponent,StartDayChildComponent]