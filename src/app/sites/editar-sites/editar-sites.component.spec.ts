import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSitesComponent } from './editar-sites.component';

describe('EditarSitesComponent', () => {
  let component: EditarSitesComponent;
  let fixture: ComponentFixture<EditarSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
