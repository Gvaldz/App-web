import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasCardComponent } from './citas-card.component';

describe('CitasCardComponent', () => {
  let component: CitasCardComponent;
  let fixture: ComponentFixture<CitasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitasCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
