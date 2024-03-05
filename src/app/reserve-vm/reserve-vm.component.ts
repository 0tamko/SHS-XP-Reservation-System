import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { reservationVm } from 'src/models/reservationVm';
import { MessageService } from 'src/shared/message.service';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';
import { VIRTUAL_MACHINES_DATA } from 'src/shared/virtual-machines-data';
import { AllMyVmReservationsDialogComponent } from './all-my-vm-reservations-dialog/all-my-vm-reservations-dialog.component';
@Component({
  selector: 'app-reserve-vm',
  templateUrl: './reserve-vm.component.html',
  styleUrls: ['./reserve-vm.component.scss'],
})

export class ReserveVmComponent implements OnInit {
  
  constructor(private messageService: MessageService , private dialog: MatDialog) {}
  
  displayedColumns: string[] = ['name', 'version', 'state', 'uptime','owner','reservedTill','functions'];
  
  dataSource = VIRTUAL_MACHINES_DATA;

  ngOnInit(){
  }

  changeLock(element: reservationVm){
    let id = element.id;
    VIRTUAL_MACHINES_DATA[id - 1].isLocked = !(VIRTUAL_MACHINES_DATA[id - 1].isLocked);
    this.dataSource = [...VIRTUAL_MACHINES_DATA];
  }

  openReservation(item : reservationVm): void{
    this.dialog.open(ReservationDialogComponent, {
      data:{VM: item}
    });
  }

  openInformation(item : reservationVm): void{
    this.dialog.open(InformationDialogComponent,{
      data:{id : item.id,  name : item.name}
    });
  }

  openAllMyVMReservations(){
    this.dialog.open(AllMyVmReservationsDialogComponent);
  }
  
  test(): void{
    this.messageService.message("test")
  }
}