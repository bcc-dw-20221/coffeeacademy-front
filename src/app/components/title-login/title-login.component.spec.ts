import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLoginComponent } from './title-login.component';

describe('TitleLoginComponent', () => {
  let component: TitleLoginComponent;
  let fixture: ComponentFixture<TitleLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
