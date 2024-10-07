import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCardsSectionComponent } from './pacientes-cards-section.component';

describe('PacientesCardsSectionComponent', () => {
  let component: PacientesCardsSectionComponent;
  let fixture: ComponentFixture<PacientesCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacientesCardsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
