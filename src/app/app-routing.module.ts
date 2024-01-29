import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { DashboardFormComponent } from './pages/dashboard-form/dashboard-form.component';
import { ExpensesDashboardComponent } from './pages/Expenses Dashboard/expenses-dashboard/expenses-dashboard.component';
import { MonitoringDashboardComponent } from './pages/Monitoring Dashboard/monitoring-dashboard/monitoring-dashboard.component';
import { DigitalStatusIndicatorComponent } from './pages/Monitoring Dashboard/widgets/digital-status-indicator/digital-status-indicator.component';
import { UsageDashboardComponent } from './pages/Usage Dashboard/usage-dashboard/usage-dashboard.component';


const routes: Routes = [
  // {
  //       path: 'monitoring',
  //       pathMatch: 'full',
  //       component:MonitoringDashboardComponent
  // },
  // {
  //   path:'usage',  
  //   component:UsageDashboardComponent
  // },
  // {
  //   path:'expenses',  
  //   component:ExpensesDashboardComponent
  // },
  // { 
  //   path: '**', 
  //   component: EmptyRouteComponent 
  // },
  {
    path:'',
    component:DashboardFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/dashboard' },
  ],
})
export class AppRoutingModule {
  MonitoringDashboardComponent
  EmptyRouteComponent
  UsageDashboardComponent
  ExpensesDashboardComponent
 }
