import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { startUpProfileComponent } from './startUpProfile.component';

describe('startUpProfile', () => {
  let component: startUpProfileComponent;
  let fixture: ComponentFixture<startUpProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ startUpProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(startUpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
