import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClientePage } from './area-cliente.page';

describe('AreaClientePage', () => {
  let component: AreaClientePage;
  let fixture: ComponentFixture<AreaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
