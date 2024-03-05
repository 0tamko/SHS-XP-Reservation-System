import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-all-reservations-dialog',
  templateUrl: './delete-all-reservations-dialog.component.html',
  styleUrls: ['./delete-all-reservations-dialog.component.scss']
})
export class DeleteAllReservationsDialogComponent {
  constructor (
    public dialogRef : MatDialogRef<DeleteAllReservationsDialogComponent>,
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
