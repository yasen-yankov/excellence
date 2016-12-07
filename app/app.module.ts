import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { DashboardModule }   from './dashboard/dashboard.module';

@NgModule({
  imports: [ 
  	BrowserModule,
    HttpModule,
    DashboardModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }