import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AllMyReservationsDialogComponent } from './all-my-reservations-dialog/all-my-reservations-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { KojeReservationDialogComponent } from './koje-reservation-dialog/koje-reservation-dialog.component';
import { RemarksDialogComponent } from './remarks-dialog/remarks-dialog.component';
import { TIMEZONES } from 'src/shared/time-zones';
import { KOJE_DATA } from 'src/shared/koje-data';

@Component({
  selector: 'app-reserve-koje',
  templateUrl: './reserve-koje.component.html',
  styleUrls: ['./reserve-koje.component.scss'],
})

export class ReserveKojeComponent {
  
  constructor(private dialog:MatDialog) {}

  displayedColumns: string[] = ['name', 'version', 'remark', 'currentlyReservedBy','reservedTill','functions'];

  data = KOJE_DATA;
  
  dataSource = new MatTableDataSource(this.data);

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

  openKojeReservation(): void{
    const dialogKojeReservations = this.dialog.open(KojeReservationDialogComponent,{data:{timeZone:this.selectedTimeZone}});
  }

  openKojeRemarks(): void{
    const dialogKojeRemarks = this.dialog.open(RemarksDialogComponent);
  }
}
