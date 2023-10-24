import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClaseButton } from '@interfaces/clase-button';
import { DropdownButton } from '@interfaces/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() title: string = '';
  @Input() clase: ClaseButton = 'btn-primary';
  @Input() dropdownButtons: DropdownButton[] = [];
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();

  onClick(idButton: string) {
    this.clicker.emit(idButton);
  }
}
