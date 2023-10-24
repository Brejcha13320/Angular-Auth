import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  title = 'TABLA DE TAREAS';
  subtitle =
    'En esta sección puedes visualizar todas tus tareas, tambien puedes realizar acciones como filtrar, crear, eliminar y editar';
}
