import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbCardModule, NbContextMenuModule, NbLayoutModule, NbTabsetModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbContextMenuModule,
    NbUserModule,
    NbTabsetModule,
    NbCardModule
  ]
})

export class DashboardModule { }
