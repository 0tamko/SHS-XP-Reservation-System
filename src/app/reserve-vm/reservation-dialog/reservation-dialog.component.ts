import { DialogModule } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'src/shared/message.service';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ReservationDialogComponent>,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onCancelClick():void {
      this.dialogRef.close()
    }

    onReserveClick(): void{
      this.messageService.message("Reservation has been created for " + this.data.name)
    }
}

