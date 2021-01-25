import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabookPage } from './databook.page';

describe('DatabookPage', () => {
  let component: DatabookPage;
  let fixture: ComponentFixture<DatabookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
