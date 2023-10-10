import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyVirtualMachinesComponent } from './my-virtual-machines/my-virtual-machines.component';
import { ReserveVmComponent } from './reserve-vm/reserve-vm.component';
import { ReserveKojeComponent } from './reserve-koje/reserve-koje.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    MyVirtualMachinesComponent,
    ReserveVmComponent,
    ReserveKojeComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    NoopAnimationsModule,
    //App routing Module MUST BE last!!
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
