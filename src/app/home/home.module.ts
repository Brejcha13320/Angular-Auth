import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { COMPONENTS } from './components';
import { NgBootstrapModule } from '../third-party/ng-bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NgBootstrapModule,
    ReactiveFormsModule,
    NgBootstrapModule,
  ],
})
export class HomeModule {}
