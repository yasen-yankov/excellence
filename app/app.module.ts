import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './dashboard/services/in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard/components/dashboard.component';
import { ReleaseDetailsSidebarComponent }   from './dashboard/components/release-details-sidebar/release-details-sidebar.component';
import { ReleaseListSidebarComponent }   from './dashboard/components/release-list-sidebar/release-list-sidebar.component';
import { ReleaseStatusComponent }   from './dashboard/components/release-status/release-status.component';
import { StatusBoxComponent }   from './dashboard/components/status-box/status-box.component';

import { ProductService }   from './dashboard/services/product.service';
import { ReleaseService }   from './dashboard/services/release.service';

@NgModule({
  imports: [ 
  	BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	DashboardComponent,
    ReleaseDetailsSidebarComponent,
    ReleaseListSidebarComponent,
    ReleaseStatusComponent,
    StatusBoxComponent
  ],
  providers: [ ProductService, ReleaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }