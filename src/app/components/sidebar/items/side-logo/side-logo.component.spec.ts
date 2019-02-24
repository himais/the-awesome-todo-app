import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLogoComponent } from './side-logo.component';

describe('SideLogoComponent', () => {
  let component: SideLogoComponent;
  let fixture: ComponentFixture<SideLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
