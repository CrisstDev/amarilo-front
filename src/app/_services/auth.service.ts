import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: any = null;

  @Output() public closeSession: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    private _storageService: StorageService) {
    this.setUser();
  }

  get currentUser(): any {
    return this.user;
  }

  setUser() {
    this.user = this.getAuthFromLocalStorage();
  }

  private getAuthFromLocalStorage() {
    try {
      return this._storageService.getItem("user");
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async logout() {
    await this._storageService.removeItem("user")
    await this._storageService.removeItem("auth")
    this.setUser();
    this.closeSession.emit(false);
    this.router.navigate(['/home'], {
      queryParams: {},
    });
  }

}
