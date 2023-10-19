import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCategoryComponent } from './table-category.component';

describe('TableCategoryComponent', () => {
  let component: TableCategoryComponent;
  let fixture: ComponentFixture<TableCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCategoryComponent]
    });
    fixture = TestBed.createComponent(TableCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
