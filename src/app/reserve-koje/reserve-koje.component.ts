import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemarksDialogComponent } from './remarks-dialog/remarks-dialog.component';
import { AllMyReservationsDialogComponent } from './all-my-reservations-dialog/all-my-reservations-dialog.component';
import { KojeReservationDialogComponent } from './koje-reservation-dialog/koje-reservation-dialog.component';
import { TIMEZONES } from 'src/shared/time-zones';
import { MessageService } from 'src/shared/message.service';
import { KojeService } from 'src/shared/koje.service';
import { KojeMachines } from 'src/models/KojeMachines';

@Component({
  selector: 'app-reserve-koje',
  templateUrl: './reserve-koje.component.html',
  styleUrls: ['./reserve-koje.component.scss'],
})

export class ReserveKojeComponent implements OnInit {
  
  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    private kojeService: KojeService,
    ) {}
  
  ngOnInit(): void {
    this.getKojedata();
  }

  displayedColumns: string[] = ['name', 'version', 'remark', 'currentlyReservedBy','reservedTill','functions'];

  kojeData: KojeMachines[] = [];
  getKojedata(): void {
    this.kojeService.getKojeData().subscribe(kojeData => this.kojeData = kojeData);
  }

  timeZones = TIMEZONES;
  selectedTimeZone = this.timeZones[0];
  
  checkTimezoneOffset(){
    if (this.selectedTimeZone.name == 'Forchheim (UTC+01:00)'){
      let today = new Date();
      today.getTimezoneOffset() == -120 ? this.selectedTimeZone.difference = '+0200': this.selectedTimeZone.difference = '+0100';
    }
  }

  time: number = 30;
  changeTime(action: number) {
   (action == 1) && (this.time < 90) ? this.time += 15 : this.time = this.time;
   (action == 0) && (this.time > 15) ? this.time -= 15 : this.time = this.time; 
  }

  setReservationTime(){
    let start = new Date();
    let end = new Date();
    end.setMinutes(start.getMinutes() + this.time);
    return {start: start.toISOString(), end: end.toISOString()};
  }

  extendReservationTime(end: string){
    let extended_end = new Date(end);
    extended_end.setMinutes(extended_end.getMinutes() + this.time);
    return extended_end.toISOString();
  }

  onReservationClick(element: KojeMachines){
    let reservationTime = this.setReservationTime();
  
    if (element.currentUser == null){
      this.kojeService.setReservation(element.kojeName, 'Michalekova, Lucia', 'lucia.michalekova@siemens-healthineers.com', reservationTime.start, reservationTime.end).subscribe( reservation => {
        this.getKojedata();
        this.messageService.message("Reservation has been created for " + element.kojeName);
      });
    }
    
   else if(element.currentUser == 'Michalekova, Lucia'){
      this.kojeService.removeCurrentReservation(element.kojeName).subscribe(result => {
        if(element.endReservation != null){
          let extended_end = this.extendReservationTime(element.endReservation);
          this.kojeService.setReservation(element.kojeName, 'Michalekova, Lucia', 'lucia.michalekova@siemens-healthineers.com', reservationTime.start, extended_end).subscribe( reservation => {
            this.getKojedata();
            this.messageService.message("Reservation has been extended for another " + this.time + " minutes.");
          });
        }  
      });
    }
    
    else{
      this.messageService.message("WARNING! " + element.kojeName + " cannot be reserved for " + this.time + " minutes.")
    }  
  }

  openKojeReservation(element: KojeMachines): void{
    const dialogRef = this.dialog.open(KojeReservationDialogComponent, {data: {timeZone: this.selectedTimeZone, kojeName: element.kojeName}});
    
    dialogRef.afterClosed().subscribe(result => {
      this.getKojedata();
    });
  }

  openKojeRemarks(element :KojeMachines): void{
    this.dialog.open(RemarksDialogComponent, {data:{kojeDetails: element}});
  }

  openAllMyReservations(): void{
    const dialogRef = this.dialog.open(AllMyReservationsDialogComponent, {data:{timeZone: this.selectedTimeZone}});
    
    dialogRef.afterClosed().subscribe(result => {
      this.getKojedata();
    });
  }
}


