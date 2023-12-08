import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'src/shared/message.service';

export interface Reservation {
  owner: string;
  start: string;
  end: string;
}

const ELEMENT_DATA: Reservation[] = [
  {owner: '', start: '', end: ''},
];

@Component({
  selector: 'app-koje-reservation-dialog',
  templateUrl: './koje-reservation-dialog.component.html',
  styleUrls: ['./koje-reservation-dialog.component.scss']
})



export class KojeReservationDialogComponent {
  constructor (
    public dialogRef: MatDialogRef<KojeReservationDialogComponent>, 
    private message:MessageService,
    @Inject (MAT_DIALOG_DATA) public data: any, 
    ) {
      this.setNow();
    }
   
    
    ngOnInit(): void {
    }


    onCloseClick(): void {
      this.dialogRef.close()
    }
    

    setNow(){
      let now = new Date();
      let hours = ("0" + now.getHours()).slice(-2);
      let minutes = ("0" + now.getMinutes()).slice(-2);
      let str = hours + ':' + minutes;
      this.starttime = str;
      this.endtime = str;
    }


    selectedTimeZone = this.data.timeZone;  
    name = this.data.name;


    isButtonMonActive = false;
    isButtonTueActive = false;
    isButtonWedActive = false;
    isButtonThuActive = false;
    isButtonFriActive = false;
    isButtonSatActive = false;
    isButtonSunActive = false;
    toggleButtonMon() {
      this.isButtonMonActive = !this.isButtonMonActive;
    }
    toggleButtonTue() {
      this.isButtonTueActive = !this.isButtonTueActive;
    }
    toggleButtonWed() {
      this.isButtonWedActive = !this.isButtonWedActive;
    }
    toggleButtonThu() {
      this.isButtonThuActive = !this.isButtonThuActive;
    }
    toggleButtonFri() {
      this.isButtonFriActive = !this.isButtonFriActive;
    }
    toggleButtonSat() {
      this.isButtonSatActive = !this.isButtonSatActive;
    }
    toggleButtonSun() {
      this.isButtonSunActive = !this.isButtonSunActive;
    }


  buttonInvisible = true;
  rollButtons() {
    this.buttonInvisible = !this.buttonInvisible;
  }


  changeDisability = false;
  disableDatePicker() {
    this.changeDisability = !this.changeDisability;
  }

  displayedColumns: string[] = ['owner', 'start', 'end'];
  dataSource = ELEMENT_DATA;


  startDate: Date = new Date();
  endDate: Date = new Date();
  starttime: string = '';
  endtime: string = '';
  reservation = false;
  reservationIndex: number= 0; 
  
  onSaveClick(){
    //nefunguje
    //TODO: display more reservation, cut dates
    this.reservation = true;
    ELEMENT_DATA[this.reservationIndex].start = this.startDate.getDay() + '.' + this.startDate.getMonth() + '.' + this.startDate.getFullYear() +  ' ' + this.starttime;
    ELEMENT_DATA[this.reservationIndex].end = this.endDate.getDay() + '.' + this.endDate.getMonth() + '.' + this.endDate.getFullYear() +  ' ' + this.endtime;
    ELEMENT_DATA[this.reservationIndex].owner = 'Owner Name';
    this.message.message("Reservation has been created for " + this.name )
  }


  
}
