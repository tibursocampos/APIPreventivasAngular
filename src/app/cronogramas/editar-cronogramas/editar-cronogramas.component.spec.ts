import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCronogramasComponent } from './editar-cronogramas.component';

describe('EditarCronogramasComponent', () => {
  let component: EditarCronogramasComponent;
  let fixture: ComponentFixture<EditarCronogramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCronogramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCronogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
