import { Component, ViewChild,AfterViewInit, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { reservationVm } from 'src/models/reservationVm';
import { MessageService } from 'src/shared/message.service';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';
import { VIRTUAL_MACHINES_DATA } from 'src/shared/virtual-machines-data';
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
  
  data = VIRTUAL_MACHINES_DATA;

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