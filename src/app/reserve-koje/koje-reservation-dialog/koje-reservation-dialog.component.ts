import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-koje-reservation-dialog',
  templateUrl: './koje-reservation-dialog.component.html',
  styleUrls: ['./koje-reservation-dialog.component.scss']
})

export class KojeReservationDialogComponent {
  constructor (
    public dialogRef: MatDialogRef<KojeReservationDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any, 
    ) {
      this.setNow();
    }
    
    ngOnInit(): void {
    }

    onCloseClick(): void {
      this.dialogRef.close()
    }

    starttime: string = '';
    endtime: string = '';
    
    setNow(){
      let now = new Date();
      let hours = ("0" + now.getHours()).slice(-2);
      let minutes = ("0" + now.getMinutes()).slice(-2);
      let str = hours + ':' + minutes;
      this.starttime = str;
      this.endtime = str;
    }

    selectedTimeZone = this.data.timeZone;  
    
    showButtons : boolean = false;

    rollButtons() {
        this.showButtons = !this.showButtons;
    }
        
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

  rollButton() {
    this.buttonInvisible = !this.buttonInvisible;
  }

  changeDisability = false;

  disableDatePicker() {
    this.changeDisability = !this.changeDisability;
  }
}
