import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalERealizadasComponent } from './total-e-realizadas.component';

describe('TotalERealizadasComponent', () => {
  let component: TotalERealizadasComponent;
  let fixture: ComponentFixture<TotalERealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalERealizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalERealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
