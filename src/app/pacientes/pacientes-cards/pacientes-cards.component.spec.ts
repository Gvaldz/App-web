import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCardsComponent } from './pacientes-cards.component';

describe('PacientesCardsComponent', () => {
  let component: PacientesCardsComponent;
  let fixture: ComponentFixture<PacientesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacientesCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
