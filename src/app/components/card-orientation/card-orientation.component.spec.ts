import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrientationComponent } from './card-orientation.component';

describe('CardOrientationComponent', () => {
  let component: CardOrientationComponent;
  let fixture: ComponentFixture<CardOrientationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOrientationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
