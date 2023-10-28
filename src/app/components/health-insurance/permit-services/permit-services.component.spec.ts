import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitServicesComponent } from './permit-services.component';

describe('PermitServicesComponent', () => {
  let component: PermitServicesComponent;
  let fixture: ComponentFixture<PermitServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermitServicesComponent]
    });
    fixture = TestBed.createComponent(PermitServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
