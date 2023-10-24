import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '@interfaces/category';
import { DropdownButton } from '../../../../interfaces/dropdown';

@Component({
  selector: 'app-table-category',
  templateUrl: './table-category.component.html',
  styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent {
  @Input() term: any = '';
  @Input() categories: Category[] | null = [];
  @Input() dropdownButtons: DropdownButton[] = [];
  @Output() clicker: EventEmitter<{ idButton: string; id: string }> =
    new EventEmitter<{ idButton: string; id: string }>();

  onClick(idButton: string, id: string) {
    this.clicker.emit({ idButton, id });
  }
}
