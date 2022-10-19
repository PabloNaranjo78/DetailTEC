import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTrabajadorComponent } from './nuevo-trabajador.component';

describe('NuevoTrabajadorComponent', () => {
  let component: NuevoTrabajadorComponent;
  let fixture: ComponentFixture<NuevoTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
