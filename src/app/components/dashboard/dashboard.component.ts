import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public user: any = {};

  public items = [
    { title: 'Cerrar Sesión' }
  ];

  constructor(
    private _auth: AuthService,
    private nbMenuService: NbMenuService) { }

  ngOnInit(): void {
    this.user = this._auth.currentUser;
    console.log(this.user);
    this.nbMenuService.onItemClick().pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    ).subscribe(title => {
      if (title === 'Cerrar Sesión') {
        this._auth.logout();
      }
    });
  }

}
