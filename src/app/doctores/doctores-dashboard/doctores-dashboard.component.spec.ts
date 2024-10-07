import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresDashboardComponent } from './doctores-dashboard.component';

describe('DoctoresDashboardComponent', () => {
  let component: DoctoresDashboardComponent;
  let fixture: ComponentFixture<DoctoresDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctoresDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctoresDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
