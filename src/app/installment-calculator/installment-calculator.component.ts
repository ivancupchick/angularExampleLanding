import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { CalculatorToRequestService } from '../home/services/calculator-to-request.service';
import { SizeServiceService } from 'src/app/service/size-service.service';

export class Percentages {
  constructor(private _30: number,
              private _35: number,
              private _40: number,
              private _45: number,
              private _50: number,
              private _55: number,
              private _60: number,
              private _65: number,
              private _70: number,
              private _75: number,
              private _80: number,
              private _85: number,
              private _90: number,
              ) { }
}

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
  firstPaymentValue = 75;
  firstPaymentOptions: Options = {
    animate: false,
    floor: 30,
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

  repaymentPeriodValue = 12;
  repaymentPeriodOptions: Options = {
    animate: false,
    floor: 6,
    ceil: 24,
    step: 6,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 6 === 0) {
        return value + ' мес';
      }
    },
  };
  // end sliders options

  // set Percentages
  percentages = {
    6: new Percentages(0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01),
    12: new Percentages(0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01),
    18: new Percentages(null, null, null, null, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01),
    24: new Percentages(null, null, null, null, null, null, null, null, 0.01, 0.01, 0.01, 0.01, 0.01)
  };

  price;

  @ViewChild('prices') prices: ElementRef;

  constructor(protected sanitizer: DomSanitizer,
              private calculatorService: CalculatorToRequestService,
              private sizeService: SizeServiceService) { }

  ngOnInit() {
    this.prices.nativeElement.focus();

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

  private setFirstRepaymentOptionsCeil(minValue: number, options?: any) {
    this.firstPaymentValue = this.firstPaymentValue < minValue ? minValue : this.firstPaymentValue;

    const newOptions: Options = Object.assign({}, this.firstPaymentOptions);
    newOptions.floor = minValue;

    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        newOptions[key] = options[key];
      }
    }

    this.firstPaymentOptions = newOptions;
  }

  changeFirstRepaymentFloor(periodValue: number) {
    if (periodValue >= 6 && periodValue <= 12) {
      if (this.firstPaymentOptions.floor !== 30) {
        this.setFirstRepaymentOptionsCeil(30);
      }
    } else if (periodValue === 18) {
      if (this.firstPaymentOptions.floor !== 50) {
        this.setFirstRepaymentOptionsCeil(50);
      }
    } else {
      if (this.firstPaymentOptions.floor !== 70) {
        this.setFirstRepaymentOptionsCeil(70, {
          getLegend: (value: number): string => {
            if (value % 5 === 0) {
              return value + '%';
            }
          },
        });
      }
    }
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

  private transform(style: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  // BEGIN CALCULATION FUNCTIONS
  calculateFirstPayment(): number {
    return +(this.price * (0.01 * this.firstPaymentValue)).toFixed(2);
  }
  getFirstPayment(): string {
    let firstPaymentValue: number = this.firstPaymentValue;
    this.calculatorService.firstPayment.next(`${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`);
    // this.getFirstPaymentValue.emit(`${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`)
    return `${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`;
  }
  getPeriod(): string {
    this.calculatorService.period.next(`${this.repaymentPeriodValue} Месяцв`);
    return this.repaymentPeriodValue + ' Месяца';
  }

  calculateRate(): number {
    const allPercantagesByPeriod = this.percentages;

    let percentagesArray;
    for (const key in allPercantagesByPeriod) {
      if (allPercantagesByPeriod.hasOwnProperty(key)) {
        if ((this.repaymentPeriodValue) === +key) {
          percentagesArray = allPercantagesByPeriod[key];
          break;
        }
      }
    }

    let selectedPercentagePayment;
    for (const key in percentagesArray) {
      if (percentagesArray.hasOwnProperty(key)) {
        const keyName: string = key;
        const keyValue = keyName.slice(1);

        if (this.firstPaymentValue === +keyValue) {
          selectedPercentagePayment = percentagesArray[key];
          break;
        }
      }
    }

    this.calculatorService.price.next(this.price);
    this.calculatorService.creditOrLising.next(2);
    this.calculatorService.rate.next(selectedPercentagePayment * 0.01);
    this.calculatorService.creditOrInstallment.next(1); // 1 is installment

    return selectedPercentagePayment * 0.01;
  }

  getPLT(): number {
    const sum = this.price - ((this.firstPaymentValue * 0.01) * this.price);
    const result = this.PLT( (this.calculateRate() / 12), this.repaymentPeriodValue, sum);
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
