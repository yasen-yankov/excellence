import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { DashboardPageComponent }   from './containers/dashboard-page.component';
import { ReleaseDetailsSidebarComponent }   from './components/release-details-sidebar.component';
import { ReleaseListSidebarComponent }   from './components/release-list-sidebar.component';
import { StatusPageComponent }   from './containers/status-page.component';
import { FailingTestsPageComponent }   from './containers/failing-tests-page.component';
import { StatusBoxComponent }   from './components/status-box.component';

import { ProductService }   from './services/product.service';
import { ReleaseService }   from './services/release.service';
import { ReleaseEffects } from './effects/release';

import { reducer } from './reducers/index';

@NgModule({
  imports: [ 
  	BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  	DashboardRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ReleaseEffects),
  ],
  declarations: [
  	DashboardPageComponent,
    ReleaseDetailsSidebarComponent,
    ReleaseListSidebarComponent,
    StatusPageComponent,
    FailingTestsPageComponent,
    StatusBoxComponent
  ],
  providers: [ ProductService, ReleaseService ]
})
export class DashboardModule { }