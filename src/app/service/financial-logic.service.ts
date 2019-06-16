import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancialLogicService {

  constructor() { }

  calculateFirstPayment(price: number, firstPayment: number): number {
    return +(price * (0.01 * firstPayment)).toFixed(2);
  }

  calculateRate(percentages, repaymentPeriod: number, firstPayment: number): number {
    const array = percentages;

    let percentagesArray;
    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        if (repaymentPeriod === +key) {
          percentagesArray = array[key];
          break;
        }
      }
    }

    let selectedPercentagePayment;

    for (const key in percentagesArray) {
      if (percentagesArray.hasOwnProperty(key)) {
        const keyName: string = key;
        const keyValue: number = +keyName.slice(1);

        if (firstPayment  === keyValue ) {
          selectedPercentagePayment = percentagesArray[key];
        }
      }
    }

    return selectedPercentagePayment * 0.01;
  }

  PLT(rate: number, period: number, creditSum: number): number {
    return (-(-rate * (creditSum *  Math.pow(( 1 + rate), (period)) )) / ( Math.pow((1 + rate), (period)) - 1));
  }
}
