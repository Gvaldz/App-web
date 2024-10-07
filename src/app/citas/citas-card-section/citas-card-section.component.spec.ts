import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasCardSectionComponent } from './citas-card-section.component';

describe('CitasCardSectionComponent', () => {
  let component: CitasCardSectionComponent;
  let fixture: ComponentFixture<CitasCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitasCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
