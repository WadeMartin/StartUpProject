import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForIndividualComponent } from './profileForIndividual.component';

describe('profileForIndividual', () => {
  let component: ProfileForIndividualComponent;
  let fixture: ComponentFixture<ProfileForIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileForIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileForIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
