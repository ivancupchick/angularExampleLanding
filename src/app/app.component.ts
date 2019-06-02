import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Кредит / Лизинг на покупку автомобиля';

  clientWidth = 100;
  clientHeight = 100;

  priсe: number = 0;
  firstPayment: string = '';
  period: string = '';
  rate: number = 0;
  plt: number= 0;
  ceditOrLising: number=0;

  canChange = false;

  constructor() {
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
    window.addEventListener('resize', () => {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;
    });

    // this.calculateMinPricesForMarks();
  }

  ngAfterViewChecked() {
    this.canChange = true;
  }

  // need to modify
  scrollToSecondPage() {
    window.scrollTo({ left: 0, top: this.clientHeight, behavior: 'smooth'});
  }
  scrollToThirdPage() {
    window.scrollTo({ left: 0, top: (this.clientHeight * 3), behavior: 'smooth'});
  }

  setPrice(price: number) {
    if (this.canChange) this.priсe = price;
  }
  setFirstPayment(firstPayment: string) {
    if (this.canChange) this.firstPayment = firstPayment;
  }
  setPeriod(period: string) {
    if (this.canChange) this.period = period;
  }
  setRate(rate: number) {
    if (this.canChange) this.rate = rate;
  }
  setPLT(plt: number) {
    if (this.canChange) this.plt = plt;
  }
  setCreditOrLising(ceditOrLising: number) {
    if (this.canChange) this.ceditOrLising = ceditOrLising;
  }
}
