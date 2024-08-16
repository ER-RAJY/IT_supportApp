import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './admin/equipment/equipment.component';
import { PanneComponent } from './admin/panne/panne-component/panne-component.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { AppLoginComponent } from './admin/app-login/app-login.component';
import {AuthGuard} from "./guard/auth-gaurd.guard";
import {TechniciensComponent} from "./admin/techniciens/techniciens.component";
import {TicketsComponent} from "./admin/tickets/tickets.component";

import {UserComponent} from "./admin/user/user.component";
import {DashboardComponent} from "./DashboardUser/dashboarduser/dashboard.component";

const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AppLoginComponent },
  { path: 'admin/technicien', component: TechniciensComponent ,canActivate: [AuthGuard]},
  { path: 'admin/users', component: DashboardComponent ,canActivate: [AuthGuard]},
  { path: 'admin/userss', component: UserComponent ,canActivate: [AuthGuard]},

  { path: 'admin/equipements', component: EquipmentComponent, canActivate: [AuthGuard] },
  { path: 'admin/pannes', component: PanneComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/tickets', component: TicketsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
