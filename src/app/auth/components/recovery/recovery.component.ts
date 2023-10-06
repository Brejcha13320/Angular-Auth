import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent implements OnInit {
  form!: UntypedFormGroup;

  /**
   * get para el value del email del formulario
   */
  get email() {
    return this.form.get('email')?.value;
  }

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * Valida si un control del formulario es valido
   * @param ctrName nombre del control del formulario
   * @returns retorna si no ha sido tocado o tiene errores
   */
  isInvalid(ctrName: string) {
    const control = this.form.get(ctrName);
    return control?.touched && control?.errors;
  }

  /**
   * Recuperar contraseña
   */
  recovery() {
    if (this.form.invalid) {
      console.log(this.form);
      this.form.markAllAsTouched();
      this.notifyService.open({
        title: 'Error en el Formulario',
        message: 'Por favor complete el formulario',
        clase: 'danger',
      });
    } else {
      this.authService.recovery(this.email).subscribe(
        (data) => {
          this.notifyService.open({
            title: 'Correo Enviado Exitosamente',
            message: 'Ingrese al Enlace enviado al correo electronico',
            clase: 'success',
          });
        },
        () => {
          this.notifyService.open({
            title: 'Problemas al Recuperar Contrseña',
            message:
              'No se ha podido completar el proceso, verifique sus credenciales',
            clase: 'danger',
          });
        }
      );
    }
  }

  /**
   * Redirigir al usuario al componente de login
   */
  login() {
    this.router.navigateByUrl('auth/login');
  }
}
