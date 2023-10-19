import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  title = 'TABLA DE LISTAS';
  subtitle =
    'En esta sección de listas puedes visualizar todos tus listados, tambien puedes realizar acciones como filtrar, crear, eliminar y editar';
}
