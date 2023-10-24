import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { NgBootstrapModule } from '../third-party/ng-bootstrap.module';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [...COMPONENTS, ModalConfirmComponent],
  imports: [CommonModule, NgBootstrapModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
