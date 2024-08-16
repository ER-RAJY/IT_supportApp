import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './admin/equipment/equipment.component';
import { PanneComponent } from './admin/panne/panne-component/panne-component.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { AppLoginComponent } from './admin/app-login/app-login.component';
import {AuthGuard} from "./guard/auth-gaurd.guard";
import {AuthInterceptorInterceptor} from "./Interceptor/auth-interceptor.interceptor";
import { TechniciensComponent } from './admin/techniciens/techniciens.component';
import {UserComponent} from "./admin/usres/usres.component";
import { SideBarComponent } from './side-bar/side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { DashboardComponent } from './DashboardUser/dashboarduser/dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        EquipmentComponent,
        PanneComponent,
        AdminDashboardComponent,
        TicketsComponent,
        UserComponent,
        TechniciensComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppLoginComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent,


  ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true},
        AuthGuard
    ],
  exports: [
    NavBarComponent,
    SideBarComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
