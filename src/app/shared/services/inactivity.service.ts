import { Location } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private inactivityTimeout: number = 120 * 60 * 1000; // 120 minutos en milisegundos
  public onUserInactive: EventEmitter<any> = new EventEmitter();

  constructor(private location: Location) {
    this.setupInactivityTimer();
  }

  private setupInactivityTimer(): void {
    let inactivityTimer: any;
    window.addEventListener('mousemove', () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        const path = this.location.path();
        if (!path.includes('/auth/login')) {
          this.onUserInactive.emit();
        }
      }, this.inactivityTimeout);
    });
  }
}
