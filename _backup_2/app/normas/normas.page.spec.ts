import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasPage } from './normas.page';

describe('NormasPage', () => {
  let component: NormasPage;
  let fixture: ComponentFixture<NormasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
