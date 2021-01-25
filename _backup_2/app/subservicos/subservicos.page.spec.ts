import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubservicosPage } from './subservicos.page';

describe('SubservicosPage', () => {
  let component: SubservicosPage;
  let fixture: ComponentFixture<SubservicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubservicosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubservicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
