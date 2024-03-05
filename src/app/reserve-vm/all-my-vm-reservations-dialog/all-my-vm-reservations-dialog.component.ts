import { Component, Inject } from '@angular/core';
import { MY_VM_RESERVATIONS } from 'src/shared/my-vm-reservations';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'src/shared/message.service';
import { DeleteAllMyVmReservationsDialogComponent } from './delete-all-my-vm-reservations-dialog/delete-all-my-vm-reservations-dialog.component';

@Component({
  selector: 'app-all-my-vm-reservations-dialog',
  templateUrl: './all-my-vm-reservations-dialog.component.html',
  styleUrls: ['./all-my-vm-reservations-dialog.component.scss']
})
export class AllMyVmReservationsDialogComponent {
  
  constructor (
    public dialogRef: MatDialogRef<AllMyVmReservationsDialogComponent>,
    private dialog: MatDialog,
    private messageService: MessageService,

    @Inject (MAT_DIALOG_DATA) public data: any,
  ) {}
     
    allMyReservations = MY_VM_RESERVATIONS;

    displayedColumns: string[] = ['name', 'start', 'end', 'delete'];
    
    onRemoveAllClick(): void {
      const dialogRef = this.dialog.open(DeleteAllMyVmReservationsDialogComponent);
      
      dialogRef.afterClosed().subscribe((deleteAllVmReservations: boolean) => {
        if(deleteAllVmReservations) {
          for ( let i = 0; i < this.allMyReservations.length; i++){
            MY_VM_RESERVATIONS.splice(0,1);
          } 
          this.messageService.message("All reservations for user 'User's name' were removed.")
        }
      });
    }

    deleteReservation(element:any){
      let index = element.reservationIndex;
      MY_VM_RESERVATIONS.splice(index,1);
      this.allMyReservations = [...MY_VM_RESERVATIONS];

      for (let i = 0; i < this.allMyReservations.length; i++){
        MY_VM_RESERVATIONS[i].reservationIndex = i;
      }
  
      this.allMyReservations = [...MY_VM_RESERVATIONS];
    }

    onCloseClick(): void {
      this.dialogRef.close();
    }
}
