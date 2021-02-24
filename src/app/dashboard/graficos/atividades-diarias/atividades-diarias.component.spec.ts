import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesDiariasComponent } from './atividades-diarias.component';

describe('AtividadesDiariasComponent', () => {
  let component: AtividadesDiariasComponent;
  let fixture: ComponentFixture<AtividadesDiariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesDiariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesDiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
