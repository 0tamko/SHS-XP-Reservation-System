import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { reservationVm } from 'src/models/reservationVm';
import { MessageService } from 'src/shared/message.service';

@Component({
  selector: 'app-reserve-vm',
  templateUrl: './reserve-vm.component.html',
  styleUrls: ['./reserve-vm.component.scss'],
})

export class ReserveVmComponent {
  
  

  displayedColumns: string[] = ['name', 'version', 'state', 'uptime','owner','functions'];
  data: reservationVm [] = [
    {id: 1,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan" },
    {id: 1,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null },
    {id: 1,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan" },
    {id: 1,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null },
    {id: 1,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan" },
    {id: 1,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null },
    {id: 1,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan" },
    {id: 1,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null },
    {id: 1,name:"XP-VM-01", version: "eagle.va20a.release.si_daily2_20220318_0200", status: null ,state: "Running", uptime:"4d 04:09:32 " ,owner: "Allers, Stefan" },
    {id: 1,name:"XP-VM-02", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-03", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-04", version: "eagle.va20b.release.si_daily2_20231010_0200", status: null ,state: "Running", uptime:"0d 00:00:00" ,owner: null },
    {id: 1,name:"XP-VM-15", version: "eagle.va10f.release.vmSIT2_20211202_1053", status: null ,state: "Running", uptime:" 21d 16:13:16 " ,owner: null },
  ];
  dataSource = new MatTableDataSource(this.data);

  constructor(private message: MessageService) {}


  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  
  test(){
    this.message.message("test")
  }
}
