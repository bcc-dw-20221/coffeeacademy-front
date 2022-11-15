import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsVacancyComponent } from './jobs-vacancy.component';

describe('JobsVacancyComponent', () => {
  let component: JobsVacancyComponent;
  let fixture: ComponentFixture<JobsVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsVacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
