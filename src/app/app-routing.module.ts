import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyVirtualMachinesComponent } from './my-virtual-machines/my-virtual-machines.component';
import { ReserveKojeComponent } from './reserve-koje/reserve-koje.component';
import { ReserveVmComponent } from './reserve-vm/reserve-vm.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"myvms", component: MyVirtualMachinesComponent},
  {path:"reservationkoje",component: ReserveKojeComponent},
  {path:"reservationvms",component:ReserveVmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
