import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [NgbDropdownModule, NgbTypeaheadModule],
})
export class NgBootstrapModule {}
