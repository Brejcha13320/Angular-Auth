import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { COMPONENTS } from './components';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
