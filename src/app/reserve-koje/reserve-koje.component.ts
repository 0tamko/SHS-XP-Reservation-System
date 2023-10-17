import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { reservationKoje } from 'src/models/reservationKoje';

@Component({
  selector: 'app-reserve-koje',
  templateUrl: './reserve-koje.component.html',
  styleUrls: ['./reserve-koje.component.scss']
})
export class ReserveKojeComponent {
  

  displayedColumns: string[] = ['name', 'version', 'remark', 'currentlyReservedBy','reservedTill','functions'];

  data: reservationKoje [] = [
    {id: 1,name:"Koje 13", version: "GB VA20", status: null ,remark: null , reservedTill:"17.10. 20:45" ,owner: "Kern, Felix(ext)",isLocked: true },
    {id: 2,name:"Koje 25", version: "VA20B_SIT3", status: null ,remark: "Will be used by TC for official SIT 3", reservedTill: null ,owner: null,isLocked: true },
    {id: 3,name:"Koje 26", version: "Sharpfin", status: null ,remark: null , reservedTill: null ,owner: null,isLocked: true },
    {id: 4,name:"Koje 27", version: "A20B_SIT3", status: null ,remark: "Will be used by TC for official SIT 3", reservedTill: null ,owner: null,isLocked: true },
    {id: 5,name:"Koje 33", version: "GB VA20", status: null ,remark: "used for temperature test with ceiling tube stand TUI", reservedTill: null ,owner: null,isLocked: true },
  ]
  dataSource = new MatTableDataSource(this.data);

}
