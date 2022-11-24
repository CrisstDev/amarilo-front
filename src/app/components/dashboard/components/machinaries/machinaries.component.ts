import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../_services/dashboard.service';

@Component({
  selector: 'app-machinaries',
  templateUrl: './machinaries.component.html',
  styleUrls: ['./machinaries.component.scss']
})
export class MachinariesComponent implements OnInit {

  public machinarySelected: number = 0;
  public machinaries: any[] = [];
  public allStock: any[] = [];
  public countStock: any = {
    busy: 0,
    onRepair: 0,
    available: 0,
  };
  public statuses: any = {
    "1": "DISPONIBLE",
    "2": "OCUPADA",
    "3": "REPARACION"
  };

  constructor(private readonly dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getMachinaries();
  }

  getMachinaries() {
    this.dashboardService.findAllMachinaries()
    .subscribe((res) => {
      this.machinaries = res;
    })
  }

  getAllStock() {
    this.dashboardService.findAllStockByMachinary({ id: this.machinarySelected })
    .subscribe((res) => {
      this.allStock = [];
      this.allStock = res;
    })
  }

  getBusy() {
    this.countStock.busy = Math.floor(Math.random() * 3);
  }

  getOnRepare() {
    this.countStock.onRepair = Math.floor(Math.random() * 3);
  }

  getAvailable() {
    this.countStock.available = Math.floor(Math.random() * 3);
  }

  onSelected() {
    this.getAllStock();
    this.getBusy();
    this.getOnRepare();
    this.getAvailable();
  }

  displayStatus(status: string) {
    return this.statuses[status];
  }

  

}
