import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { COMPONENTS } from './components';
import { NgBootstrapModule } from '../third-party/ng-bootstrap.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, NgBootstrapModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
