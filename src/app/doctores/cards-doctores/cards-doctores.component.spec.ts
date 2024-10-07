import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDoctoresComponent } from './cards-doctores.component';

describe('CardsDoctoresComponent', () => {
  let component: CardsDoctoresComponent;
  let fixture: ComponentFixture<CardsDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsDoctoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
