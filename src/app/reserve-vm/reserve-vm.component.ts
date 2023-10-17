import { Component, ViewChild,AfterViewInit, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { reservationVm } from 'src/models/reservationVm';
import { MessageService } from 'src/shared/message.service';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';

@Component({
  selector: 'app-reserve-vm',
  templateUrl: './reserve-vm.component.html',
  styleUrls: ['./reserve-vm.component.scss'],
})

export class ReserveVmComponent implements OnInit {
  
  constructor(private message: MessageService , private dialog: MatDialog) {}
  

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  


  displayedColumns: string[] = ['name', 'version', 'state', 'uptime','owner','functions'];
  data: reservationVm [] = [
    {id: 1,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Bllers, Stefan",isLocked: true },
    {id: 2,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 3,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 4,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false },
    {id: 5,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null,isLocked: false },
    {id: 6,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan",isLocked: true },
    {id: 7,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 8,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 9,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false },
    {id: 10,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null,isLocked: false },
    {id: 11,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan",isLocked: true },
    {id: 12,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 13,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 14,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false },
    {id: 15,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null,isLocked: false },
    {id: 16,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan",isLocked: true },
    {id: 17,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 18,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 19,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false },
    {id: 20,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null,isLocked: false },
    {id: 21,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan",isLocked: true },
    {id: 22,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 23,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false},
    {id: 24,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null,isLocked: false },
    {id: 25,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null,isLocked: false },
  ];
  dataSource = new MatTableDataSource(this.data);

  ngOnInit(){
  }


  openReservation(item : reservationVm): void{
    const dialogReservation = this.dialog.open(ReservationDialogComponent, {
      data:{id : item.id,  name : item.name}
    });
    dialogReservation.afterClosed().subscribe(()=>{
      this.message.message("Reservation has been created for " + item.name!)
    })
  }

  openInformation(item : reservationVm): void{
    const dialogInformation = this.dialog.open(InformationDialogComponent,{
      data:{id : item.id,  name : item.name}
    });
  }
  
  test(): void{
    this.message.message("test")
  }
}