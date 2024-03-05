import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-power-off-dialog',
  templateUrl: './power-off-dialog.component.html',
  styleUrls: ['./power-off-dialog.component.scss']
})
export class PowerOffDialogComponent {
  constructor (
    public dialogRef : MatDialogRef<PowerOffDialogComponent>,
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
