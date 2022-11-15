import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCalendarComponent } from './academic-calendar.component';

describe('AcademicCalendarComponent', () => {
  let component: AcademicCalendarComponent;
  let fixture: ComponentFixture<AcademicCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
