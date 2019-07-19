import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartDataSelectionComponent } from './barchart-data-selection.component';

describe('BarchartDataSelectionComponent', () => {
  let component: BarchartDataSelectionComponent;
  let fixture: ComponentFixture<BarchartDataSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartDataSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartDataSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
