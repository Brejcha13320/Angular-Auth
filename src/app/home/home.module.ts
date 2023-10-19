import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { COMPONENTS } from './components';
import { NgBootstrapModule } from '../third-party/ng-bootstrap.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, HomeRoutingModule, NgBootstrapModule],
})
export class HomeModule {}
