import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantAndRaveComponent } from './rant-and-rave.component';

describe('RantAndRaveComponent', () => {
  let component: RantAndRaveComponent;
  let fixture: ComponentFixture<RantAndRaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantAndRaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantAndRaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
