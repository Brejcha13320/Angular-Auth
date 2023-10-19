import { Component } from '@angular/core';
import { InactivityService } from './shared/services/inactivity.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private inactivityService: InactivityService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.inactivityService.onUserInactive.subscribe(() => {
      // Cerrar sesión cuando el usuario esté inactivo
      console.log('cerrar cesion por inactividad');
      this.authService.logout();
    });
  }
}
