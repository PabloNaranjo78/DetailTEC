import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLavadoComponent } from './nuevo-lavado.component';

describe('NuevoLavadoComponent', () => {
  let component: NuevoLavadoComponent;
  let fixture: ComponentFixture<NuevoLavadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoLavadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoLavadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
