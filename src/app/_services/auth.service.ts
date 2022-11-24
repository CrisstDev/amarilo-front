import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: any = null;

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
    this.setUser();
    this.router.navigate(['/home'], {
      queryParams: {},
    });
  }

}
