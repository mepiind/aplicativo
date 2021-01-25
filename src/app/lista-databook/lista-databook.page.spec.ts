import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDatabookPage } from './lista-databook.page';

describe('ListaDatabookPage', () => {
  let component: ListaDatabookPage;
  let fixture: ComponentFixture<ListaDatabookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDatabookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDatabookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
