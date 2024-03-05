import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-all-my-vm-reservations-dialog',
  templateUrl: './delete-all-my-vm-reservations-dialog.component.html',
  styleUrls: ['./delete-all-my-vm-reservations-dialog.component.scss']
})
export class DeleteAllMyVmReservationsDialogComponent {
    constructor (
      public dialogRef : MatDialogRef<DeleteAllMyVmReservationsDialogComponent>,
    ) {}
    
    deleteAllReservations: boolean = false;
    
    onYesClick(): void {
      this.deleteAllReservations = true;
      this.dialogRef.close(this.deleteAllReservations);
    }
  
    onNoClick(): void {
      this.dialogRef.close(this.deleteAllReservations);
    }
}
