import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowSubmitComponent } from './how-submit.component';

describe('HowSubmitComponent', () => {
  let component: HowSubmitComponent;
  let fixture: ComponentFixture<HowSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
