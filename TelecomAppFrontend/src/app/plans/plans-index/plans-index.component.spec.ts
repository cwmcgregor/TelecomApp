import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansIndexComponent } from './plans-index.component';

describe('PlansIndexComponent', () => {
  let component: PlansIndexComponent;
  let fixture: ComponentFixture<PlansIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
