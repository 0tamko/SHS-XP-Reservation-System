import { DialogModule } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'src/shared/message.service';
import { myVMReservations } from 'src/models/myVMReservations';
import { MY_VM_RESERVATIONS } from 'src/shared/my-vm-reservations';
import { VIRTUAL_MACHINES_DATA } from 'src/shared/virtual-machines-data';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ReservationDialogComponent>,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    vmName = this.data.VM.name;
    vmVersion = this.data.VM.version;
    vmState = this.data.VM.state;
    vmUptime = this.data.VM.uptime;
    isLocked = this.data.VM.isLocked;
    id = this.data.VM.id - 1;

    allDay = false;

    changeLock(){
      this.isLocked = !(this.isLocked);

    }
  
    changeDisability() {
      this.allDay = !this.allDay;
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

    myVMReservations: myVMReservations[] = MY_VM_RESERVATIONS.filter(item => item.name === this.vmName);
  
    today: Date = new Date();
    startDate: Date = new Date();
    endDate: Date = new Date();
    untilDate: Date = new Date();
    
    starttime: string = '';
    endtime: string = '';
    singleDayReservation = true;
    displayedColumns: string[] = ['owner', 'start', 'end','delete'];
    
    dateChanged(){
      if(this.endDate.getTime()  == this.startDate.getTime()) {
        this.singleDayReservation = true;
      }
      else{
        this.singleDayReservation = false;
      }
    }
  
    createReservation(start: Date, end: Date){
      let index = MY_VM_RESERVATIONS.length;

      if(this.allDay || this.starttime == '' || this.endtime == ''){
        start.setHours(0, 0);
        end.setHours(23, 59);
      }
  
      else{
        let starttime = this.starttime.split(":");
        let startHour= Number(starttime[0]);
        let startMinute = Number(starttime[1]);
        start.setHours(startHour, startMinute);
  
        let endtime = this.endtime.split(":");
        let endHour = Number(endtime[0]);
        let endMinute = Number(endtime[1]);
        end.setHours(endHour, endMinute);
      }
  
      if(end.getTime() < start.getTime()){ 
        end.setDate(end.getDate() + 1);
      }

      let newReservation: myVMReservations = {reservationIndex: index, name: this.vmName, version: this.vmVersion, state: this.vmState, uptime:this.vmUptime, owner: 'User Name', start: start.toISOString(), end: end.toISOString(), isLocked: this.isLocked};
      if (new Date(newReservation.start) <= new Date() && new Date(newReservation.end) >= new Date()){
        VIRTUAL_MACHINES_DATA[this.id].owner = newReservation.owner;
        VIRTUAL_MACHINES_DATA[this.id].reservedTill = newReservation.end;
      }

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
      MY_VM_RESERVATIONS.push(newReservation);
      this.myVMReservations = [...MY_VM_RESERVATIONS.filter(item => item.name === this.vmName)];
  
      for (let i = 0; i < dates.length; i++){
        let currentDate = dates[i];
        let currentDay = dates[i].getDay();
        for (let j = 0; j < activeDays.length; j++){
          if (currentDay == activeDays[j]){
            let newReservation = this.createReservation(new Date(currentDate), new Date(currentDate));
            MY_VM_RESERVATIONS.push(newReservation);
            this.myVMReservations = [...MY_VM_RESERVATIONS.filter(item => item.name === this.vmName)];
          }
        }
      }

      let lastDay = this.untilDate.getDay();
      for (let i = 0; i < activeDays.length;i++){
        if (lastDay == activeDays[i]){
          let newReservation = this.createReservation(new Date(this.untilDate), new Date(this.untilDate));
          MY_VM_RESERVATIONS.push(newReservation);
          this.myVMReservations = [...MY_VM_RESERVATIONS.filter(item => item.name === this.vmName)];
        }
      }
    }
  
    deleteReservation(element:any){
      let index = element.reservationIndex;
      MY_VM_RESERVATIONS.splice(index,1);
      this.myVMReservations = [...MY_VM_RESERVATIONS];
  
      for (let i = 0; i < MY_VM_RESERVATIONS.length; i++){
        MY_VM_RESERVATIONS[i].reservationIndex = i;
      }
  
      this.myVMReservations = [...MY_VM_RESERVATIONS];
    }

    onReserveClick(){
      if(this.reservationRepeat){
        this.repeatReservation();
        this.messageService.message("Reservations have been created for " + this.vmName)
      }
  
      else{
        let newReservation = this.createReservation(this.startDate, this.endDate);
        MY_VM_RESERVATIONS.push(newReservation);
        this.myVMReservations = [...MY_VM_RESERVATIONS.filter(item => item.name=== this.vmName)];
        this.messageService.message("Reservation has been created for " + this.vmName);
      }
      this.messageService.message("Reservation has been created for " + this.data.name);
    }

    onCancelClick() {
      this.dialogRef.close();
    }

}

