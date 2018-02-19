import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { userProfileEditComponent } from './userProfileEdit.component';

describe('user-profile-edit', () => {
  let component: userProfileEditComponent;
  let fixture: ComponentFixture<userProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ userProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(userProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
