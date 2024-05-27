import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { myKojeReservations } from 'src/models/myKojeReservations';
import { KojeService } from 'src/shared/koje.service';
import { MessageService } from 'src/shared/message.service';

@Component({
  selector: 'app-koje-reservation-dialog',
  templateUrl: './koje-reservation-dialog.component.html',
  styleUrls: ['./koje-reservation-dialog.component.scss'],
})

export class KojeReservationDialogComponent implements OnInit{
  constructor (
    public dialogRef: MatDialogRef<KojeReservationDialogComponent>, 
    private message:MessageService,
    private kojeService: KojeService,

    @Inject (MAT_DIALOG_DATA) public data: any, 
  ) {}

  ngOnInit(): void {
    this.getKojeReservations();
  }

  displayedColumns: string[] = ['owner', 'start', 'end','delete'];
  kojeName: string = this.data.kojeName;
  selectedTimeZone = this.data.timeZone;  

  kojeReservations: myKojeReservations[] = [];
  getKojeReservations(): void {
    this.kojeService.getKojeReservations(this.kojeName).subscribe(kojeReservations => {this.kojeReservations = kojeReservations;});
  }
  
  allDay = false;
  changeDisability() {
    this.allDay = !(this.allDay);
  }

  reservationRepeat = false;
  rollButtons() {
    this.reservationRepeat = !this.reservationRepeat;
  }

  days = [{day: "Sunday", value: false}, 
          {day: "Monday", value: false}, 
          {day: "Tuesday", value: false}, 
          {day: "Wednesday", value: false}, 
          {day: "Thursday", value: false}, 
          {day: "Friday", value: false}, 
          {day: "Saturday", value: false}];

  today: string = new Date().toISOString();
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();
  
  starttime: string;
  endtime: string;

  createReservation(start: string, end: string){
    this.starttime = (this.starttime == undefined || this.allDay) ? "00:00" : this.starttime;
    this.endtime = (this.endtime == undefined || this.allDay) ? "23:59" : this.endtime;

    let UTCstart = new Date(start).toString().split(" ");
    let UTCend = new Date(end).toString().split(" ");

    let startReservation = new Date(UTCstart[1] + " " + UTCstart[2] + " " + UTCstart[3] + " " + this.starttime + ' GMT' + this.selectedTimeZone.difference).toISOString();
    let endReservation = new Date(UTCend[1] + " " + UTCend[2] + " " + UTCend[3] + " " + this.endtime + ' GMT' + this.selectedTimeZone.difference).toISOString();

    let starttime = startReservation.substring(11,16);
    let endtime = endReservation.substring(11,16);

    return {start: startReservation, end: endReservation, starttime: starttime, endtime: endtime};
  }

  getActiveDays(){
      let activeDays: string[] = [];
      for (let i = 0; i < this.days.length; i++){
        if (this.days[i].value == true){
          activeDays.push(this.days[i].day);
        }
      }
      return activeDays;
  }

  deleteReservation(reservationId:string){
    this.kojeService.deleteReservation(reservationId).subscribe( result => {
      this.getKojeReservations();
    });
  }

  onSaveClick(){
    if(this.reservationRepeat){
      let activeDays = this.getActiveDays();
      let reservationTime = this.createReservation(this.startDate, this.endDate);
      this.kojeService.setReservationSerie(this.kojeName, 'Michalekova, Lucia', 'lucia.michalekova@siemens-healthineers.com', reservationTime.start, reservationTime.end, reservationTime.starttime, reservationTime.endtime, activeDays).subscribe(result => {
        console.log(result);
        if(result.status == 0){
          this.message.message("Reservations have been created for " + this.kojeName);
        }
        else{
          (result.message != null) ? this.message.message(result.message) : this.message.message("Reservation for " + this.kojeName + " failed");
        }
        this.getKojeReservations();
      });
    }

    else{
      let reservationTime = this.createReservation(this.startDate, this.endDate);
      this.kojeService.setReservation(this.kojeName, 'Michalekova, Lucia', 'lucia.michalekova@siemens-healthineers.com', reservationTime.start, reservationTime.end).subscribe(result => {
        if(result.status == 0){
          this.message.message("Reservation has been created for " + this.kojeName);
        }
        else{
          (result.message != null) ? this.message.message("WARNING: " + result.message) : this.message.message("Reservation for " + this.kojeName + " failed");
        }
        this.getKojeReservations();
      });
    }
  }

  onCloseClick(){
    this.dialogRef.close();
  }
}
