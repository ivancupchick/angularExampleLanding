import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorToRequestService {

  price: BehaviorSubject<number> = new BehaviorSubject(0);
  firstPayment: BehaviorSubject<string> = new BehaviorSubject('');
  period: BehaviorSubject<string> = new BehaviorSubject('');
  rate: BehaviorSubject<number> = new BehaviorSubject(0);
  plt: BehaviorSubject<number> = new BehaviorSubject(0);
  creditOrLising: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
}
