// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CalculatorService {

//   constructor() { }

//   getPLT( price: number,
//           firstPayment: number,
//           creditOrLising: number,
//           creditPeriod: number,
//           lisingPeriod: number,
//           array: any
//         ): number {
//     const sum = price - ((firstPayment * 0.01) * price);
//     const result = this.PLT( (this.calculateRate(array, creditOrLising, creditPeriod, lisingPeriod) / 12),
//                               this.calculatePeriod(creditOrLising, creditPeriod, lisingPeriod), sum);
//     if (isNaN(result)) {
//       // show ERROR MESSAGE NOT POSSIBLE GET CREDIT WITH 0 PERCETAGE FIRST PAYMENT AND > 5 YEARS PERIOD REPAYMENT
//       return 0;
//     }
//     return result;
//   }

//   calculatePeriod(creditOrLising: number, creditPeriod: number, lisingPeriod: number): number {
//     if (creditOrLising === 0) {
//       return creditPeriod;
//     } else {
//       return lisingPeriod;
//     }
//   }

//   calculateRate(array, creditOrLising: number, creditPeriod: number, lisingPeriod: number): number {

//     let percentagesArray;
//     let tempKey = '-1';
// // tslint:disable-next-line: forin
//     for (const key in array) {
//       if ((this.calculatePeriod(creditOrLising, creditPeriod, lisingPeriod) / 12) <= +key &&
//           (this.calculatePeriod(creditOrLising, creditPeriod, lisingPeriod) / 12) > +tempKey) {
//         percentagesArray = array[key];
//       }
//       tempKey = key;
//     }

//     let selectedPercentagePayment;
//     let temporaryPecentagePaymentKey = '0';
// // tslint:disable-next-line: forin
//     for (const key in percentagesArray) {
//       if (this.getFirstPaymentPercentageValue() < +key && this.getFirstPaymentPercentageValue() >= +temporaryPecentagePaymentKey) {
//         selectedPercentagePayment = percentagesArray[temporaryPecentagePaymentKey];
//       }
//       if (this.getFirstPaymentPercentageValue() >= 70) {
//         selectedPercentagePayment = percentagesArray[70];
//       }
//       if (this.getFirstPaymentPercentageValue() == 0) {
//         selectedPercentagePayment = percentagesArray[0];
//       }
//       temporaryPecentagePaymentKey = key;
//     }

//     return selectedPercentagePayment * 0.01;
//   }

//   PLT(rate: number, period: number, creditSum: number): number {
//     return (-(-rate * (creditSum *  Math.pow(( 1 + rate), (period)) )) / ( Math.pow((1 + rate), (period)) - 1));
//   }
// }
