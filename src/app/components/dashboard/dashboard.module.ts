import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbCardModule, NbContextMenuModule, NbLayoutModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ProjectsComponent } from './components/projects/projects.component';
import { MachinariesComponent } from './components/machinaries/machinaries.component';

@NgModule({
  declarations: [DashboardComponent, ProjectsComponent, MachinariesComponent],
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
