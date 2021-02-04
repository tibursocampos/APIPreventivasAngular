import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaDetalhadoComponent } from './cronograma-detalhado.component';

describe('CronogramaDetalhadoComponent', () => {
  let component: CronogramaDetalhadoComponent;
  let fixture: ComponentFixture<CronogramaDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaDetalhadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
