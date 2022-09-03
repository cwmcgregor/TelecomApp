import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingIndexComponent } from './billing-index.component';

describe('BillingIndexComponent', () => {
  let component: BillingIndexComponent;
  let fixture: ComponentFixture<BillingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
