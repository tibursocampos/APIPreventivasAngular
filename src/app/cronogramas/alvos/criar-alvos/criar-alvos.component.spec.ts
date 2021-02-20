import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlvosComponent } from './criar-alvos.component';

describe('CriarAlvosComponent', () => {
  let component: CriarAlvosComponent;
  let fixture: ComponentFixture<CriarAlvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAlvosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAlvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
