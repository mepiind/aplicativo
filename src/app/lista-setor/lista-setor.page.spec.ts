import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSetorPage } from './lista-setor.page';

describe('ListaSetorPage', () => {
  let component: ListaSetorPage;
  let fixture: ComponentFixture<ListaSetorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSetorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSetorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
