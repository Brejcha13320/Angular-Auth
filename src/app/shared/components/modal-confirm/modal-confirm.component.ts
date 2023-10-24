import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent {
  constructor(public activeModal: NgbActiveModal) {}

  clickEvents(idButton: string) {
    this.closeModal(idButton);
  }

  closeModal(status: string) {
    this.activeModal.close({ status });
  }
}
