import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { NotifyService } from 'src/app/_services/notify.service';
import { ServiceService } from 'src/app/_services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public actualYear = new Date().getFullYear();
  public isLoading: boolean = false;

  public showPassword: boolean = false;

  public formLogin: FormGroup;

  public subscriptions: Subscription[] = [];

  public user: any = {};

  constructor(
    public _fb: FormBuilder,
    public _notify: NotifyService,
    private _services: ServiceService,
    private _auth: AuthService,
    private _route: Router
  ) {
    this.formLogin = this._fb.group({
      email: [null, [Validators.required, Validators.minLength(1), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(1)]],
      remindMe: [false]
    });
  }

  get form() {
    return this.formLogin.controls;
  }

  ngOnInit(): void {
    this.user = this._auth.currentUser;
    if (Object.keys(this.user).length > 0) {
      this._route.navigate(["/dashboard"]);
    }
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {

    let formValues = this.formLogin.getRawValue();

    if (!this.formLogin.valid) {

      if (this.form['email'].errors) {
        if (this.form['email'].errors['required']) {
          this._notify.show("info", "Información", "No has ingresado tu correo electrónico.");
        } else if (this.form['email'].errors['email']) {
          this._notify.show("info", "Información", "El correo electrónico que ingresaste no tiene un formato válido. (Ej: correo@hotmail.com)");
        }
      } else if (this.form['password'].errors) {
        if (this.form['password'].errors['required']) {
          this._notify.show("info", "Información", "No has ingresado tu contraseña.");
        }
      }
      return;
    }

    this.isLoading = true;

    const loginSub = this._services.login(formValues).subscribe((res: any) => {
      if (Object.keys(res).length > 0) {
        this._notify.show("success", "Bienvenido", res.name);
        this.isLoading = false;
      }
    }, err => {
      this._notify.show("info", "Información", err.error ? err.error.message : 'Hubo un error al intentar inciar sesión.');
      this.isLoading = false;
      throw err;
    });

    this.subscriptions.push(loginSub);

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
