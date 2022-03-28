import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyPaymentsComponent } from './view-my-payments.component';

describe('ViewMyPaymentsComponent', () => {
  let component: ViewMyPaymentsComponent;
  let fixture: ComponentFixture<ViewMyPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
