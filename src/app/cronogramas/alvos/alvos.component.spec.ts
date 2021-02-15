import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvosComponent } from './alvos.component';

describe('AlvosComponent', () => {
  let component: AlvosComponent;
  let fixture: ComponentFixture<AlvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
