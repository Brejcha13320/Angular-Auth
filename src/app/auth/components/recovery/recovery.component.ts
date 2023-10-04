import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent {
  constructor(private router: Router) {}

  /**
   * Recuperar contraseña
   */
  recovery() {}

  /**
   * Redirigir al usuario al componente de login
   */
  login() {
    this.router.navigateByUrl('auth/login');
  }
}
