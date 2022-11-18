import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDiaryComponent } from './academic-diary.component';

describe('AcademicDiaryComponent', () => {
  let component: AcademicDiaryComponent;
  let fixture: ComponentFixture<AcademicDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicDiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
