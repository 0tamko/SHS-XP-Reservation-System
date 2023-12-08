import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-all-my-reservations-dialog',
  templateUrl: './all-my-reservations-dialog.component.html',
  styleUrls: ['./all-my-reservations-dialog.component.scss']
})

export class AllMyReservationsDialogComponent {
  
  constructor (
    public dialogRef: MatDialogRef<AllMyReservationsDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) {}

    onCloseClick(): void {
      this.dialogRef.close()
    }
}
