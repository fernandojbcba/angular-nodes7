import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent_vk1 } from './dashboard-vk1/dashboard-vk1.component';
import { DashboardComponent_vk2 } from './dashboard-vk2/dashboard-vk2.component';
import { DashboardComponent_vk3 } from './dashboard-vk3/dashboard-vk3.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent_vk1,
    DashboardComponent_vk2,
    DashboardComponent_vk3,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
