import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  title = 'TABLA DE USUARIOS';
  subtitle =
    'En esta sección de usuarios puedes visualizar todos los usuarios registrados, tambien puedes realizar acciones como filtrar y ver el detalle';
}
