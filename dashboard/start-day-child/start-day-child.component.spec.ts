import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDayChildComponent } from './start-day-child.component';

describe('StartDayChildComponent', () => {
  let component: StartDayChildComponent;
  let fixture: ComponentFixture<StartDayChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDayChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartDayChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
