import { Component } from '@angular/core';
import { myVMReservations } from 'src/models/myVMReservations';
import { MY_VM_RESERVATIONS } from 'src/shared/my-vm-reservations';
import { InformationDialogComponent } from '../reserve-vm/information-dialog/information-dialog.component';
import { MessageService } from 'src/shared/message.service';
import { MatDialog } from '@angular/material/dialog';
import { reservationVm } from 'src/models/reservationVm'; 
import { PowerOffDialogComponent } from './power-off-dialog/power-off-dialog.component';
import { UnreserveVmDialogComponent } from './unreserve-vm-dialog/unreserve-vm-dialog.component';

@Component({
  selector: 'app-my-virtual-machines',
  templateUrl: './my-virtual-machines.component.html',
  styleUrls: ['./my-virtual-machines.component.scss']
})
export class MyVirtualMachinesComponent {
  constructor(
    private messageService: MessageService,
    private dialog: MatDialog,
  ){}

  runningReservations: myVMReservations[] = MY_VM_RESERVATIONS.filter(item => (new Date(item.start).getTime() <= new Date().getTime()) && (new Date(item.end).getTime() >= new Date().getTime()));
  
  displayedColumns: string[] = ['VM','version', 'state','uptime', 'reservedTill', 'functions'];

  startStopVM(element:myVMReservations){
    let index = element.reservationIndex;
    MY_VM_RESERVATIONS[index].state == 'Running' ? MY_VM_RESERVATIONS[index].state = 'Off' : MY_VM_RESERVATIONS[index].state = 'Running';
    MY_VM_RESERVATIONS[index].state == 'Running' ? this.messageService.message("FLC VF11G started."): this.messageService.message("FLC VF11G stopped.");
  }

  powerOff(element:myVMReservations){
    const dialog = this.dialog.open(PowerOffDialogComponent);
    dialog.afterClosed().subscribe((powerOff: boolean) => {
      if(powerOff) {
        let index = element.reservationIndex;
        MY_VM_RESERVATIONS[index].state = 'Off';
      }
    });
  }

  changeLock(element: myVMReservations){
    let index = element.reservationIndex;
    MY_VM_RESERVATIONS[index].isLocked = !(MY_VM_RESERVATIONS[index].isLocked);
  }

  unreserveVM(element: myVMReservations){
    const dialog = this.dialog.open(UnreserveVmDialogComponent);

    dialog.afterClosed().subscribe((unreserveVM: boolean) => {
      if(unreserveVM) {
        let index = element.reservationIndex;
        MY_VM_RESERVATIONS.splice(index,1);
        this.runningReservations = [...MY_VM_RESERVATIONS.filter(item => (new Date(item.start).getTime() <= new Date().getTime()) && (new Date(item.end).getTime() >= new Date().getTime()))];
    
        for (let i = 0; i < MY_VM_RESERVATIONS.length; i++){
          MY_VM_RESERVATIONS[i].reservationIndex = i;
        }
        this.runningReservations = [...MY_VM_RESERVATIONS.filter(item => (new Date(item.start).getTime() <= new Date().getTime()) && (new Date(item.end).getTime() >= new Date().getTime()))];
      }
    });
  }

  openInformationDialog(element: reservationVm){
    this.dialog.open(InformationDialogComponent, {data:{name : element.name}});
    
  }
}