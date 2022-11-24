import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../_services/dashboard.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public isAdded: boolean = false;
  public projects: any [] = [];

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
  }

  getProjects() {
    this.dashboardService.getProjects()
    .subscribe((res) => {
      this.projects = res;
    })
  }

  addProject() {}

}
