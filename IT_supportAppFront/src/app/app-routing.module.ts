import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipmentComponent} from "./admin/equipment/equipment.component";

const routes: Routes = [
  {path : 'equipement', component : EquipmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
