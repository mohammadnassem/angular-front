import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalComponent } from './occupational.component';

describe('OccupationalComponent', () => {
  let component: OccupationalComponent;
  let fixture: ComponentFixture<OccupationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OccupationalComponent]
    });
    fixture = TestBed.createComponent(OccupationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
