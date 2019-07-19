import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameDisplayComponent } from './user-name-display.component';

describe('UserNameDisplayComponent', () => {
  let component: UserNameDisplayComponent;
  let fixture: ComponentFixture<UserNameDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
