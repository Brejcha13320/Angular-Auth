import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  title = 'TABLA DE CATEGORIAS';
  subtitle =
    'En esta sección de categorias puedes visualizar todas tu categorias, tambien puedes realizar acciones como filtrar, crear, eliminar y editar';
}
