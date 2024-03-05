import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-unreserve-vm-dialog',
  templateUrl: './unreserve-vm-dialog.component.html',
  styleUrls: ['./unreserve-vm-dialog.component.scss']
})
export class UnreserveVmDialogComponent {
  constructor (
    public dialogRef : MatDialogRef<UnreserveVmDialogComponent>,
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
