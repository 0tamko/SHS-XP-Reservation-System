import { Component,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AllMyReservationsDialogComponent } from './all-my-reservations-dialog/all-my-reservations-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { KojeReservationDialogComponent } from './koje-reservation-dialog/koje-reservation-dialog.component';
import { RemarksDialogComponent } from './remarks-dialog/remarks-dialog.component';
import { TIMEZONES } from 'src/shared/time-zones';
import { KOJE_DATA } from 'src/shared/koje-data';
import { reservationKoje } from 'src/models/reservationKoje';
import { MessageService } from 'src/shared/message.service';

@Component({
  selector: 'app-reserve-koje',
  templateUrl: './reserve-koje.component.html',
  styleUrls: ['./reserve-koje.component.scss'],
})

export class ReserveKojeComponent {
  
  constructor(
    private dialog: MatDialog,
    private message: MessageService,
    ) {}

  displayedColumns: string[] = ['name', 'version', 'remark', 'currentlyReservedBy','reservedTill','functions'];
  
  dataSource = new MatTableDataSource(KOJE_DATA);

  timeZones = TIMEZONES;
  selectedTimeZone = this.timeZones[0];

  time: number = 30;

  addTime() {
    if (this.time < 90) {
      this.time += 15;
    }
  }

  removeTime() {
    if (this.time > 15) {
      this.time -= 15; 
    }
  }

  openAllMyReservations(): void{
    const dialogAllReservations = this.dialog.open(AllMyReservationsDialogComponent);
  }

  openKojeReservation(element: reservationKoje): void{
    this.dialog.open(KojeReservationDialogComponent,{data:{timeZone:this.selectedTimeZone, name: element.name}});
    }

  openKojeRemarks(element : reservationKoje): void{
    const dialogKojeRemarks = this.dialog.open(RemarksDialogComponent,{data:{kojeDetails: element}});
  }

  onReservationClick(element: reservationKoje){
    this.message.message("Reservation has been created for " + element.name);
  }

}


