import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNormasPage } from './lista-normas.page';

describe('ListaNormasPage', () => {
  let component: ListaNormasPage;
  let fixture: ComponentFixture<ListaNormasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNormasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNormasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
