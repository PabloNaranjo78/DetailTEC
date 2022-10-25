import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCitComponent } from './nueva-cit.component';

describe('NuevaCitComponent', () => {
  let component: NuevaCitComponent;
  let fixture: ComponentFixture<NuevaCitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaCitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaCitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
