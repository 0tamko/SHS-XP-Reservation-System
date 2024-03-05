import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { myKojeReservations } from 'src/models/myKojeReservations';
import { MessageService } from 'src/shared/message.service';
import { MY_KOJE_RESERVATIONS } from 'src/shared/my-koje-reservations';

@Component({
  selector: 'app-koje-reservation-dialog',
  templateUrl: './koje-reservation-dialog.component.html',
  styleUrls: ['./koje-reservation-dialog.component.scss']
})

export class KojeReservationDialogComponent implements OnInit{
  constructor (
    public dialogRef: MatDialogRef<KojeReservationDialogComponent>, 
    private message:MessageService,
    @Inject (MAT_DIALOG_DATA) public data: any, 
  ) {}

  ngOnInit(){}

  displayedColumns: string[] = ['owner', 'start', 'end','delete'];
  selectedTimeZone = this.data.timeZone;  
  kojeName: string = this.data.kojeName;

  allDay = false;
  changeDisability() {
    this.allDay = !(this.allDay);
  }

  buttonVisible = false;
  reservationRepeat = false;
  
  rollButtons() {
    this.buttonVisible = !this.buttonVisible;
    this.reservationRepeat = !this.reservationRepeat;
  }

  days = [{day: "Sun", value: false}, 
          {day: "Mon", value: false}, 
          {day: "Tue", value: false}, 
          {day: "Wed", value: false}, 
          {day: "Thu", value: false}, 
          {day: "Fri", value: false}, 
          {day: "Sat", value: false}];

  selectDay(dayIndex: number, value: boolean){
    value = !value;
    this.days[dayIndex].value = value;
  }

  myKojeReservations: myKojeReservations[] = MY_KOJE_RESERVATIONS.filter(item => item.koje === this.kojeName);

  today: Date = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date();
  untilDate: Date = new Date();
  
  starttime: string = '';
  endtime: string = '';
  singleDayReservation = true;

  dateChanged(){
    this.endDate.getTime()  == this.startDate.getTime() ? this.singleDayReservation = true : this.singleDayReservation = false;
  }

  createReservation(start: Date, end: Date){
    let timezoneminute = Number(this.selectedTimeZone.difference.substr(3,5));
    let timezonehour = Number(this.selectedTimeZone.difference.substr(0,3));

    if(this.allDay || this.starttime == '' || this.endtime == ''){
      let startHour = 0 - timezonehour + 1;
      let startMinute = 0 - timezoneminute;
      start.setHours(startHour, startMinute);

      let endHour = 23 - timezonehour + 1;
      let endMinute = 59 - timezoneminute;
      end.setHours(endHour, endMinute);
    }

    else{
      let starttime = this.starttime.split(":");
      let startHour= Number(starttime[0]) - timezonehour + 1;
      let startMinute = Number(starttime[1]) - timezoneminute;
      start.setHours(startHour, startMinute);

      let endtime = this.endtime.split(":");
      let endHour = Number(endtime[0]) - timezonehour + 1;
      let endMinute = Number(endtime[1]) - timezoneminute;
      end.setHours(endHour, endMinute);
    }

    if(end.getTime() < start.getTime()){ 
      end.setDate(end.getDate() + 1);
    }

    let reservationIndex = this.myKojeReservations.length;
    let newReservation: myKojeReservations = {reservationIndex: reservationIndex, koje: this.kojeName, owner: 'Owner Name', start: start.toISOString(), end: end.toISOString()};
    return newReservation;
  }


  getDatesBetween() {
    let startDate = new Date(this.startDate);
    let endDate = new Date(this.untilDate);
    let dates = [];

    let currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + 1);
    while (currentDate.getTime() < endDate.getTime()) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}


  getActiveDays(){
      let activeDays: number[] = [];
      for (let i = 0; i < this.days.length; i++){
        if (this.days[i].value == true){
          activeDays.push(i);
        }
      }
      return activeDays;
  }

  repeatReservation(){
    let dates = this.getDatesBetween();
    let activeDays = this.getActiveDays();
   
    let newReservation = this.createReservation(new Date(this.startDate), new Date(this.startDate));
    MY_KOJE_RESERVATIONS.push(newReservation);
    this.myKojeReservations = [...MY_KOJE_RESERVATIONS.filter(item => item.koje === this.kojeName)];
  
    for (let i = 0; i < dates.length; i++){
      let currentDate = dates[i];
      let currentDay = dates[i].getDay();
      for (let j = 0; j < activeDays.length; j++){
        if (currentDay == activeDays[j]){
          let newReservation = this.createReservation(new Date(currentDate), new Date(currentDate));
          MY_KOJE_RESERVATIONS.push(newReservation);
          this.myKojeReservations = [...MY_KOJE_RESERVATIONS.filter(item => item.koje === this.kojeName)];
        }
      }
    }

    let lastDay = this.untilDate.getDay();
    for (let i = 0; i < activeDays.length;i++){
      if (lastDay == activeDays[i]){
        let newReservation = this.createReservation(new Date(this.untilDate), new Date(this.untilDate));
        MY_KOJE_RESERVATIONS.push(newReservation);
        this.myKojeReservations = [...MY_KOJE_RESERVATIONS.filter(item => item.koje === this.kojeName)];
      }
    }
  }

  onSaveClick(){
    if(this.reservationRepeat){
      this.repeatReservation();
      this.message.message("Reservations have been created for " + this.kojeName)
    }

    else{
      let newReservation = this.createReservation(this.startDate, this.endDate);
      MY_KOJE_RESERVATIONS.push(newReservation);
      this.myKojeReservations = [...MY_KOJE_RESERVATIONS.filter(item => item.koje === this.kojeName)];
      this.message.message("Reservation has been created for " + this.kojeName);
    }
  }

  onCloseClick(){
    this.dialogRef.close();
  }

  deleteReservation(element:any){
    let index = element.reservationIndex;
    MY_KOJE_RESERVATIONS.splice(index,1);
    this.myKojeReservations = [...MY_KOJE_RESERVATIONS];

    for (let i = 0; i < this.myKojeReservations.length; i++){
      MY_KOJE_RESERVATIONS[i].reservationIndex = i;
    }

    this.myKojeReservations = [...MY_KOJE_RESERVATIONS];
  }
}
