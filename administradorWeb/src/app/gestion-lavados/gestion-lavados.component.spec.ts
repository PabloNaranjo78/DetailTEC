import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLavadosComponent } from './gestion-lavados.component';

describe('GestionLavadosComponent', () => {
  let component: GestionLavadosComponent;
  let fixture: ComponentFixture<GestionLavadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLavadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionLavadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
