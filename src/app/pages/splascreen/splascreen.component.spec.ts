import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplascreenComponent } from './splascreen.component';

describe('SplascreenComponent', () => {
  let component: SplascreenComponent;
  let fixture: ComponentFixture<SplascreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplascreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplascreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
