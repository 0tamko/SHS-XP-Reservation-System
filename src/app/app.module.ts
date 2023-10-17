import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyVirtualMachinesComponent } from './my-virtual-machines/my-virtual-machines.component';
import { ReserveVmComponent } from './reserve-vm/reserve-vm.component';
import { ReserveKojeComponent } from './reserve-koje/reserve-koje.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationDialogComponent } from './reserve-vm/reservation-dialog/reservation-dialog.component';
import { InformationDialogComponent } from './reserve-vm/information-dialog/information-dialog.component';


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    MyVirtualMachinesComponent,
    ReserveVmComponent,
    ReserveKojeComponent,
    ReservationDialogComponent,
    InformationDialogComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    NoopAnimationsModule,
    //App routing Module MUST BE last!!
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
