import { Component } from '@angular/core';
import { reservationVm } from 'src/models/reservationVm';

@Component({
  selector: 'app-reserve-vm',
  templateUrl: './reserve-vm.component.html',
  styleUrls: ['./reserve-vm.component.scss'],
})

export class ReserveVmComponent {
  
  displayedColumns: string[] = ['name', 'version', 'state', 'uptime','owner','functions'];

  dataSource: reservationVm [] = [
    {id: 1,name:"AppHostVMGen1", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"AppHostVMGen1", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"AppHostVMGen1", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
  ];
}
