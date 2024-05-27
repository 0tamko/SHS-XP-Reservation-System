import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KojeService } from 'src/shared/koje.service';

@Component({
  selector: 'app-remarks-dialog',
  templateUrl: './remarks-dialog.component.html',
  styleUrls: ['./remarks-dialog.component.scss']
})
export class RemarksDialogComponent {

  constructor (
    public dialogRef: MatDialogRef<RemarksDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any, 
    public kojeService: KojeService, 
  ) {}

  kojeDetails = this.data.kojeDetails;
  remarkInput = this.kojeDetails.remarks;
  versionInput = this.kojeDetails.version;
  
  onSaveClick(): void {
    this.versionInput = (this.versionInput == null) ? '' : this.versionInput;
    this.remarkInput = (this.remarkInput == null) ? '' : this.remarkInput;

    this.kojeService.setRemark(this.kojeDetails.kojeName, this.remarkInput, this.versionInput).subscribe( result => {
      this.kojeDetails.remarks = this.remarkInput;
      this.kojeDetails.version = this.versionInput;
      this.dialogRef.close();  
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.remarkInput = '';
    this.kojeDetails.remarks = '';
    this.kojeService.deleteRemark(this.kojeDetails.kojeName).subscribe(result => {
      this.dialogRef.close();
    });
  } 
}
