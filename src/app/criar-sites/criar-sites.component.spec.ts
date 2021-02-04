import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSitesComponent } from './criar-sites.component';

describe('CriarSitesComponent', () => {
  let component: CriarSitesComponent;
  let fixture: ComponentFixture<CriarSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
