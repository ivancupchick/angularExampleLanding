import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLisingCalculatorComponent } from './credit-lising-calculator.component';

describe('CreditLisingCalculatorComponent', () => {
  let component: CreditLisingCalculatorComponent;
  let fixture: ComponentFixture<CreditLisingCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditLisingCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLisingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
