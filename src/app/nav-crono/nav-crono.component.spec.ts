import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCronoComponent } from './nav-crono.component';

describe('NavCronoComponent', () => {
  let component: NavCronoComponent;
  let fixture: ComponentFixture<NavCronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCronoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
