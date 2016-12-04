import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './dashboard/services/in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }   from './dashboard/components/dashboard/dashboard.component';
import { ReleaseDetailsSidebarComponent }   from './dashboard/components/release-details-sidebar/release-details-sidebar.component';
import { ReleaseListSidebarComponent }   from './dashboard/components/release-list-sidebar/release-list-sidebar.component';
import { ReleaseStatusComponent }   from './dashboard/components/release-status/release-status.component';
import { StatusBoxComponent }   from './dashboard/components/status-box/status-box.component';

import { ProductService }   from './dashboard/services/product.service';
import { ReleaseService }   from './dashboard/services/release.service';
import { ReleaseEffects } from './dashboard/effects/release';

import { reducer } from './dashboard/reducers/index';

@NgModule({
  imports: [ 
  	BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  	AppRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ReleaseEffects),
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