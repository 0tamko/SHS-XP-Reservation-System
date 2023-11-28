import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-remarks-dialog',
  templateUrl: './remarks-dialog.component.html',
  styleUrls: ['./remarks-dialog.component.scss']
})
export class RemarksDialogComponent {
  constructor (
    public dialogRef : MatDialogRef<RemarksDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data : any,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close()
  }
}
