import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '@interfaces/auth';
import { AuthService } from 'src/app/auth/services/auth.service';

interface Options {
  title: string;
  router: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user$ = this.authService.user$;

  options: Options[] = [
    {
      title: 'Tareas',
      router: 'task',
    },
    {
      title: 'Categorias',
      router: 'category',
    },
    {
      title: 'Usuarios',
      router: 'users',
    },
    {
      title: 'Información',
      router: 'about',
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
