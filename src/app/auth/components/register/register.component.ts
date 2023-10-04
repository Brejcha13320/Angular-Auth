import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { MyValidators } from 'src/app/shared/utils/validators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: UntypedFormGroup;

  /**
   * get para el value del email del formulario
   */
  get email() {
    return this.form.get('email')?.value;
  }

  /**
   * get para el value del nombre del formulario
   */
  get name() {
    return this.form.get('name')?.value;
  }

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
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private notifyService: NotifyService
  ) {}

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
        email: ['', [Validators.required, Validators.email]],
        name: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: MyValidators.matchPasswords,
      }
    );
  }

  /**
   * Valida si las contraseñas son iguales
   */
  matchPasswords() {
    if (this.password === this.confirmPassword) return null;
    return { match_password: true };
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
   * Registrar al usuario
   */
  register() {
    if (this.form.invalid) {
      console.log(this.form);
      this.form.markAllAsTouched();
      this.notifyService.open({
        title: 'Error en el Formulario',
        message: 'Por favor complete el formulario',
        clase: 'danger',
      });
    } else {
      const objRegister = {
        email: this.email,
        name: this.name,
        password: this.password,
      };
      this.authService.register(objRegister).subscribe((response) => {
        console.log('response register', response);
        const queryParams = {
          email: this.email,
        };
        this.router.navigate(['auth/login'], { queryParams });
      });
    }
  }

  /**
   * Redirigir al usuario al componente de login
   */
  login() {
    this.router.navigateByUrl('auth/login');
  }
}
