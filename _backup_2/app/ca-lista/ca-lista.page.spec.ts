import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaListaPage } from './ca-lista.page';

describe('CaListaPage', () => {
  let component: CaListaPage;
  let fixture: ComponentFixture<CaListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
