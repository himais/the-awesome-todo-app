import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProgressComponent } from './log-progress.component';

describe('LogProgressComponent', () => {
  let component: LogProgressComponent;
  let fixture: ComponentFixture<LogProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
