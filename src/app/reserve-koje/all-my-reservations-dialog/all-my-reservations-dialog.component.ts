import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteAllReservationsDialogComponent } from './delete-all-reservations-dialog/delete-all-reservations-dialog.component';
import { MY_KOJE_RESERVATIONS } from 'src/shared/my-koje-reservations';
import { MessageService } from 'src/shared/message.service';
import { myKojeReservations } from 'src/models/myKojeReservations';

export interface ReservationDetails{
  koje: string | null;
  start: string | null;
  end: string | null;
}

@Component({
  selector: 'app-all-my-reservations-dialog',
  templateUrl: './all-my-reservations-dialog.component.html',
  styleUrls: ['./all-my-reservations-dialog.component.scss']
})

export class AllMyReservationsDialogComponent {
  
  constructor (
    public dialogRef: MatDialogRef<AllMyReservationsDialogComponent>,
    private dialog: MatDialog,
    private messageService: MessageService,

    @Inject (MAT_DIALOG_DATA) public data: any,
  ) {}
    
    allMyReservations = MY_KOJE_RESERVATIONS;
    selectedTimeZone = this.data.timeZone;

    displayedColumns: string[] = ['koje', 'start', 'end', 'delete'];
    
    onRemoveAllClick(): void {
      const dialogRef = this.dialog.open(DeleteAllReservationsDialogComponent);
      
      dialogRef.afterClosed().subscribe((deleteAllReservations: boolean) => {
        if(deleteAllReservations) {
          let numberOfReservations = this.allMyReservations.length;
          for ( let i = 0; i < numberOfReservations; i++){
            MY_KOJE_RESERVATIONS.splice(0,1);
          } 
          this.messageService.message("All reservations for user 'User's name' were removed.")
        }
      });
    }

    deleteReservation(element:any){
      let index = element.reservationIndex;
      MY_KOJE_RESERVATIONS.splice(index,1);
      this.allMyReservations = [...MY_KOJE_RESERVATIONS];
  
      let numberOfReservations = this.allMyReservations.length;
  
      for (let i = 0; i < numberOfReservations; i++){
        MY_KOJE_RESERVATIONS[i].reservationIndex = i;
      }
  
      this.allMyReservations = [...MY_KOJE_RESERVATIONS];
    }

    onCloseClick(): void {
      this.dialogRef.close();
    }
}
