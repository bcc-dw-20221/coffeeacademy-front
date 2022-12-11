import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiaryComponent } from './card-diary.component';

describe('CardDiaryComponent', () => {
  let component: CardDiaryComponent;
  let fixture: ComponentFixture<CardDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
