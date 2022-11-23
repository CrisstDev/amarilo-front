import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public user: any = {};

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.user = this._auth.currentUser;
    console.log(this.user);
  }

}
