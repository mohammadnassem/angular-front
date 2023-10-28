import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHealthComponent } from './public-health.component';

describe('PublicHealthComponent', () => {
  let component: PublicHealthComponent;
  let fixture: ComponentFixture<PublicHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicHealthComponent]
    });
    fixture = TestBed.createComponent(PublicHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
