import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemarksDialogComponent } from './remarks-dialog/remarks-dialog.component';
import { AllMyReservationsDialogComponent } from './all-my-reservations-dialog/all-my-reservations-dialog.component';
import { KojeReservationDialogComponent } from './koje-reservation-dialog/koje-reservation-dialog.component';
import { TIMEZONES } from 'src/shared/time-zones';
import { KOJE_DATA } from 'src/shared/koje-data';
import { reservationKoje } from 'src/models/reservationKoje';
import { MessageService } from 'src/shared/message.service';
import { MY_KOJE_RESERVATIONS } from 'src/shared/my-koje-reservations';


@Component({
  selector: 'app-reserve-koje',
  templateUrl: './reserve-koje.component.html',
  styleUrls: ['./reserve-koje.component.scss'],
})

export class ReserveKojeComponent {
  
  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    ) {}
  
  dataSource = KOJE_DATA;
  timeZones = TIMEZONES;
  time: number = 30;
  selectedTimeZone = this.timeZones[0];
  displayedColumns: string[] = ['name', 'version', 'remark', 'currentlyReservedBy','reservedTill','functions'];

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

  start = new Date();
  end = new Date();
  
  setReservationTime(){
    this.start = new Date();
    let startMinutes = this.start.getMinutes();
    let startHours = this.start.getHours();

    let endMinutes = (startMinutes + this.time) % 60;
    let endHours = startHours + Math.floor((startMinutes + this.time) / 60); 
    this.end.setHours(endHours, endMinutes);
  }

  extendReservationTime(){
    let endMinutes = this.end.getMinutes();
    let endHours = this.end.getHours();

    endMinutes += this.time;

    endHours += Math.floor((endMinutes) / 60); 
    endMinutes %= 60;

    this.end.setHours(endHours, endMinutes);
  }

  extendReservation(element:reservationKoje){
    for(let i = 0; i < MY_KOJE_RESERVATIONS.length; i++){
      let reservation = MY_KOJE_RESERVATIONS[i];
      if (reservation.koje == element.name && ((new Date(reservation.start).getTime()) <= new Date().getTime()) && ((new Date(reservation.end).getTime()) >= new Date().getTime())){
        this.end = new Date(reservation.end);
        this.extendReservationTime();
        MY_KOJE_RESERVATIONS[i].end = this.end.toISOString();
      }
    }
  }

  onReservationClick(element: reservationKoje){
    let newReservationIndex = MY_KOJE_RESERVATIONS.length;

    if (KOJE_DATA[element.id - 1].owner == null){
      this.setReservationTime();
      KOJE_DATA[element.id - 1].owner = 'User name';
      KOJE_DATA[element.id - 1].reservedTill = this.end.toISOString(); 

      let kojeName: any = element.name;
      let newReservation = {reservationIndex: newReservationIndex, koje: kojeName, owner: 'User Name', start: this.start.toISOString(), end: this.end.toISOString()};
      MY_KOJE_RESERVATIONS.push(newReservation);

      this.messageService.message("Reservation has been created for " + element.name);
    }

   else if(KOJE_DATA[element.id - 1].owner == 'User name'){
      this.extendReservation(element);
      
      KOJE_DATA[element.id - 1].reservedTill = this.end.toISOString(); 
      this.messageService.message("Reservation for " + element.name + " has been exended for another " + this.time + " minutes.");
    }
    
    else{
      this.messageService.message("WARNING! " + element.name + " cannot be reserved for " + this.time + " minutes.")
    }  
  }

  openKojeReservation(element: reservationKoje): void{
    this.dialog.open(KojeReservationDialogComponent, {
      data: { timeZone: this.selectedTimeZone, kojeName: element.name}
    });
  }

  openKojeRemarks(element : reservationKoje): void{
    this.dialog.open(RemarksDialogComponent, {data:{kojeDetails: element}});
  }

  openAllMyReservations(): void{
    this.dialog.open(AllMyReservationsDialogComponent, {
      data:{timeZone: this.selectedTimeZone}
    });
  }
}


