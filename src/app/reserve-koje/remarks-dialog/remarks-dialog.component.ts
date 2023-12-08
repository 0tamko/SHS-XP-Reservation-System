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

  remarkPresent = false;

  onSaveClick(): void {
    this.remarkPresent = true;
    this.kojeDetails.remark = this.remarkInput;
    this.kojeDetails.version = this.versionInput;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.remarkPresent = false;
    this.remarkInput = '';
  }

  kojeDetails = this.data.kojeDetails;

  remarkInput : string = '';
  versionInput : string = '';
}
