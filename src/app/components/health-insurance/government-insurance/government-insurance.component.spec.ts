import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentInsuranceComponent } from './government-insurance.component';

describe('GovernmentInsuranceComponent', () => {
  let component: GovernmentInsuranceComponent;
  let fixture: ComponentFixture<GovernmentInsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GovernmentInsuranceComponent]
    });
    fixture = TestBed.createComponent(GovernmentInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
