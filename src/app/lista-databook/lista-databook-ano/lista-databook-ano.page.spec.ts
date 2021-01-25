import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDatabookAnoPage } from './lista-databook-ano.page';

describe('ListaDatabookAnoPage', () => {
  let component: ListaDatabookAnoPage;
  let fixture: ComponentFixture<ListaDatabookAnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDatabookAnoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDatabookAnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
