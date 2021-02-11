import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCronogramasComponent } from './criar-cronogramas.component';

describe('CriarCronogramasComponent', () => {
  let component: CriarCronogramasComponent;
  let fixture: ComponentFixture<CriarCronogramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCronogramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCronogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
