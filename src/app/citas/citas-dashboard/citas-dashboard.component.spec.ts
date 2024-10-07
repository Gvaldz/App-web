import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasDashboardComponent } from './citas-dashboard.component';

describe('CitasDashboardComponent', () => {
  let component: CitasDashboardComponent;
  let fixture: ComponentFixture<CitasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitasDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
