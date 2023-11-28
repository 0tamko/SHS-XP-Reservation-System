import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule } from '@angular/material/dialog'; 
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyVirtualMachinesComponent } from './my-virtual-machines/my-virtual-machines.component';
import { ReserveVmComponent } from './reserve-vm/reserve-vm.component';
import { ReserveKojeComponent } from './reserve-koje/reserve-koje.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationDialogComponent } from './reserve-vm/reservation-dialog/reservation-dialog.component';
import { InformationDialogComponent } from './reserve-vm/information-dialog/information-dialog.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AllMyReservationsDialogComponent } from './reserve-koje/all-my-reservations-dialog/all-my-reservations-dialog.component';
import { KojeReservationDialogComponent } from './reserve-koje/koje-reservation-dialog/koje-reservation-dialog.component';
import { RemarksDialogComponent } from './reserve-koje/remarks-dialog/remarks-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyVirtualMachinesComponent,
    ReserveVmComponent,
    ReserveKojeComponent,
    ReservationDialogComponent,
    InformationDialogComponent,
    AllMyReservationsDialogComponent,
    KojeReservationDialogComponent,
    RemarksDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    //App routing Module MUST BE last!!
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
