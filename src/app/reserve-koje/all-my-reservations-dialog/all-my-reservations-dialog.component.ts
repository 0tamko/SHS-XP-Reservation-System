import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteAllReservationsDialogComponent } from './delete-all-reservations-dialog/delete-all-reservations-dialog.component';
import { MY_KOJE_RESERVATIONS } from 'src/shared/my-koje-reservations';
import { MessageService } from 'src/shared/message.service';
import { KojeService } from 'src/shared/koje.service';
import { myKojeReservations } from 'src/models/myKojeReservations';

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
    private kojeService: KojeService,

    @Inject (MAT_DIALOG_DATA) public data: any,
  ) {}

    ngOnInit(): void {
      this.getAllUserReservations();
    }
    
    allMyReservations: myKojeReservations[] = [];
    selectedTimeZone = this.data.timeZone;
    displayedColumns: string[] = ['koje', 'start', 'end', 'delete'];
    
    getAllUserReservations(){
      this.kojeService.getAllUserReservations('Michalekova, Lucia').subscribe(allUserReservations => {
        this.allMyReservations = allUserReservations;
        console.log(this.allMyReservations);
      });
    
    }

    onRemoveAllClick(): void {
      const dialogRef = this.dialog.open(DeleteAllReservationsDialogComponent);
      
      dialogRef.afterClosed().subscribe(deleteAllReservations => {
        if(deleteAllReservations) {
          this.kojeService.deleteAllUserReservations('Michalekova, Lucia').subscribe(result => {
            this.getAllUserReservations();
            this.messageService.message("All reservations for user 'User's name' were removed.");
          });
        }
      });
    }
    
    deleteReservation(element:any){
      this.kojeService.deleteReservation(element.kojeReservationId).subscribe(result =>{
        this.getAllUserReservations();
      });
    }

    onCloseClick(): void {
      this.dialogRef.close();
    }
}
