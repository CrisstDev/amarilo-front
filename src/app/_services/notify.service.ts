import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})

export class NotifyService {

  constructor(public _toast: NbToastrService) { }

  show(type: string, title: string, message: string) {

    switch (type) {

      case "success": {
        this._toast.success(message, title);
        return;
      }

      case "info": {
        this._toast.info(message, title);
        return;
      }

      case "warning": {
        this._toast.warning(message, title);
        return;
      }

      case "danger": {
        this._toast.danger(message, title);
        return;
      }

      default: {
        this._toast.default(message, title);
        return;
      }

    }

  }

}