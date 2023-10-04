import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * String con el texto a mostrar en el boton
   */
  @Input() text: string = '';

  /**
   * String con el idUnico del boton, este id es el que retorna el evento click
   */
  @Input() idButton: string = '';

  /**
   * String con la clase de Bootstrap
   */
  @Input() clase:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-success'
    | 'btn-danger'
    | 'btn-warning'
    | 'btn-info'
    | 'btn-light'
    | 'btn-dark' = 'btn-primary';

  /**
   * Esta variable define si el boton va con un width del 100% o auto segun el texto
   */
  @Input() widthType: 'normal' | 'full' = 'normal';

  /**
   * Emite el Id del Boton para que el componente padre lo distinga y dispare los metodos correspondientes
   */
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Se dispara al dar click en el boton y emite el idButon asignado al boton al componente padre
   */
  onEmit() {
    this.clicker.emit(this.idButton);
  }
}
