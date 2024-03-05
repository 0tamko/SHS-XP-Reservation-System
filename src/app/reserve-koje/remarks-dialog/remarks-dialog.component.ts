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

  kojeDetails = this.data.kojeDetails;
  remarkInput = this.kojeDetails.remark;
  versionInput = this.kojeDetails.version;
  
  onSaveClick(): void {
      this.kojeDetails.remark = this.remarkInput;
      this.kojeDetails.version = this.versionInput;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.remarkInput = '';
    this.versionInput = '';
    this.kojeDetails.remark = '';
    this.kojeDetails.version = '';
  } 
}
