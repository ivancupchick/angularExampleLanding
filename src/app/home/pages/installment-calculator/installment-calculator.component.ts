import { Component, OnInit } from '@angular/core';
import { Percentages } from '../credit-lising-calculator/credit-lising-calculator.component';
import { Options } from 'ng5-slider';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { CalculatorToRequestService } from '../../services/calculator-to-request.service';
import { SizeServiceService } from 'src/app/service/size-service.service';

@Component({
  selector: 'app-installment-calculator',
  templateUrl: './installment-calculator.component.html',
  styleUrls: ['./installment-calculator.component.css']
})
export class InstallmentCalculatorComponent implements OnInit {

  minwidth: number;
  minheight: number;

  secondScreenStyle: SafeStyle;

  // sliders options
  firstPaymentPercentageValue = 15;
  firstPaymentPercentageOptions: Options = {
    floor: 0,
    ceil: 90,
    step: 5,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 10 === 0) {
        return value + '%';
      }
    },
  };

  creditRepaymentPeriodValue = 12;
  creditRepaymentPeriodOptions: Options = {
    floor: 6,
    ceil: 84,
    step: 6,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 12 === 0) {
        return value + ' мес';
      }
    },
  };
  lisingRepaymentPeriodValue = 12;
  lisingRepaymentPeriodOptions: Options = {
    floor: 6,
    ceil: 60,
    step: 6,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 12 === 0) {
        return value + ' мес';
      }
    },
  };
  // end sliders options

  // set Percentages
  percentages = {
    1: new Percentages(15.55, 13.7, 13.5, 13.3, 12.99, 12.7, 11.99, 11.00),
    2: new Percentages(15.55, 15.55, 14.5, 14.3, 13.99, 13.7, 13.15, 12.20),
    3: new Percentages(15.55, 15.55, 15.55, 14.7, 14.5, 14.1, 13.6, 12.70),
    5: new Percentages(15.55, 15.55, 15.55, 15.55, 14.9, 14.5, 13.99, 13.13),
    7: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 14.7, 14.14, 13.5),
  };

  price = 0;

  constructor(protected sanitizer: DomSanitizer,
              private calculatorService: CalculatorToRequestService,
              private sizeService: SizeServiceService) { }

  ngOnInit() {
    this.sizeService.clientWidth.subscribe( (clientWidth) => {
      this.minwidth = clientWidth;
    });
    this.sizeService.clientHeight.subscribe( (clientHeight) => {
      this.minheight = clientHeight;
    });

    this.setLineSizes();
    window.addEventListener('resize', () => {
      this.setLineSizes();
    });
  }

  // Sizing functions
  private setLineSizes() {
    const secondScreenFirstLineSize = 540 + ((+this.minheight - 766) * 0.755);
    const secondScreenSecondLineSize = 1262 + ((+this.minheight - 766) * 1.509);
    this.secondScreenStyle = this.transform(
      `background:  linear-gradient(41deg, #00000000 ${secondScreenFirstLineSize}px, #ffcc0099 ${secondScreenFirstLineSize + 1}px,
       #ffcc0099 ${secondScreenSecondLineSize}px, #00000000 ${secondScreenSecondLineSize + 1}px),
       url(../../../../assets/images/service/secondScreen.jpg); background-size: cover;`
    );
  }

  public transform(style: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  // BEGIN CALCULATION FUNCTIONS
  calculateFirstPayment(): number {
    return +(this.price * (0.01 * this.firstPaymentPercentageValue)).toFixed(2);
  }
  calculatePeriod(): number {
    return this.creditRepaymentPeriodValue;
    // if (this.creditLisingValue === 0) {
    //   return this.creditRepaymentPeriodValue;
    // } else {
    //   return this.lisingRepaymentPeriodValue;
    // }
  }
  getFirstPayment(): string {
    let firstPaymentValue: number = this.firstPaymentPercentageValue;
    this.calculatorService.firstPayment.next(`${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`);
    // this.getFirstPaymentValue.emit(`${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`)
    return `${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`;
  }
  getPeriod(): string {
    this.calculatorService.period.next(`${this.calculatePeriod()} Месяцв`);
    return this.calculatePeriod() + ' Месяца';
  }

  calculateRate(): number {
    const array = this.percentages;

    let percentagesArray;
    let tempKey = '-1';
// tslint:disable-next-line: forin
    for (const key in array) {
      if ((this.calculatePeriod() / 12) <= +key && (this.calculatePeriod() / 12) > +tempKey) {
        percentagesArray = array[key];
      }
      tempKey = key;
    }

    let selectedPercentagePayment;
    let temporaryPecentagePaymentKey = '0';
// tslint:disable-next-line: forin
    for (const key in percentagesArray) {
      if (this.firstPaymentPercentageValue < +key && this.firstPaymentPercentageValue >= +temporaryPecentagePaymentKey) {
        selectedPercentagePayment = percentagesArray[temporaryPecentagePaymentKey];
      }
      if (this.firstPaymentPercentageValue >= 70) {
        selectedPercentagePayment = percentagesArray[70];
      }
      if (this.firstPaymentPercentageValue == 0) {
        selectedPercentagePayment = percentagesArray[0];
      }
      temporaryPecentagePaymentKey = key;
    }

    this.calculatorService.price.next(this.price);
    this.calculatorService.creditOrLising.next(2);
    this.calculatorService.rate.next(selectedPercentagePayment * 0.01);
    this.calculatorService.creditOrInstallment.next(1);

    return selectedPercentagePayment * 0.01;
  }

  getPLT(): number {
    const sum = this.price - ((this.firstPaymentPercentageValue * 0.01) * this.price);
    const result = this.PLT( (this.calculateRate() / 12), this.calculatePeriod(), sum);
    if (isNaN(result)) {
      // show ERROR MESSAGE NOT POSSIBLE GET CREDIT WITH 0 PERCETAGE FIRST PAYMENT AND > 5 YEARS PERIOD REPAYMENT
      return 0;
    }
    this.calculatorService.plt.next(result);
    return result;
  }
  PLT(rate: number, period: number, creditSum: number): number {
    return (-(-rate * (creditSum *  Math.pow(( 1 + rate), (period)) )) / ( Math.pow((1 + rate), (period)) - 1));
  }
}
