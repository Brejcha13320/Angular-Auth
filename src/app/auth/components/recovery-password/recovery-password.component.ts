import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { MyValidators } from 'src/app/shared/utils/validators';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
})
export class RecoveryPasswordComponent {
  token = '';
  form!: UntypedFormGroup;

  /**
   * get para el value del password del formulario
   */
  get password() {
    return this.form.get('password')?.value;
  }

  /**
   * get para el value del confirm password del formulario
   */
  get confirmPassword() {
    return this.form.get('confirmPassword')?.value;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private notifyService: NotifyService
  ) {
    this.route.queryParamMap.subscribe((params) => {
      const token = params.get('token');
      if (token) {
        this.token = token;
      } else {
        this.redirectTo('/auth/login');
      }
    });
  }

  /**
   * Llama la funcion para crear el formulario
   */
  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Crea el formulario
   */
  createForm() {
    this.form = this.fb.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: MyValidators.matchPasswords,
      }
    );
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
   * Cambiar contraseña
   */
  changePassword() {
    if (this.form.invalid) {
      console.log(this.form);
      this.form.markAllAsTouched();
      this.notifyService.open({
        title: 'Error en el Formulario',
        message: 'Por favor complete el formulario',
        clase: 'danger',
      });
    } else {
      this.authService.recoveryPassword(this.token, this.password).subscribe(
        (response) => {
          console.log('response register and login', response);
          this.notifyService.open({
            title: 'Contraseña Cambiada Exitosamente',
            message: 'Su contraseña ha sido cambiada de manera exitosa',
            clase: 'success',
          });
          this.redirectTo('/auth/login');
        },
        () => {
          this.notifyService.open({
            title: 'Error al Cambiar Contraseña',
            message: 'Por favor verifique sus datos',
            clase: 'danger',
          });
        }
      );
    }
  }

  /**
   * Recibe una ruta y mediante el router redirige al usuario
   * @param ruta ruta a donde se va redirigir el usuario
   */
  redirectTo(ruta: string) {
    this.router.navigateByUrl(ruta);
  }
}
