import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLisingDifferenceComponent } from './credit-lising-difference.component';

describe('CreditLisingDifferenceComponent', () => {
  let component: CreditLisingDifferenceComponent;
  let fixture: ComponentFixture<CreditLisingDifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditLisingDifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLisingDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
