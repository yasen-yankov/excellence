import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent }   from './containers/dashboard-page.component';
import { StatusPageComponent }   from './containers/status-page.component';
import { FailingTestsPageComponent }   from './containers/failing-tests-page.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
    },
    {
        path: 'dashboard/:id',
        component: DashboardPageComponent,
        children: [
            {
                path: '',
                component: StatusPageComponent,
            },
            {
                path: 'status',
                component: StatusPageComponent,
            },
            {
                path: 'failing-tests',
                component: FailingTestsPageComponent,
            }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }