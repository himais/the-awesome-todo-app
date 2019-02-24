import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDropdownComponent } from './note-dropdown.component';

describe('NoteDropdownComponent', () => {
  let component: NoteDropdownComponent;
  let fixture: ComponentFixture<NoteDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
