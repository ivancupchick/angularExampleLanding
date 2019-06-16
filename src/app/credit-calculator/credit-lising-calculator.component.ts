import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Options } from 'ng5-slider';
import { CalculatorToRequestService } from '../home/services/calculator-to-request.service';
import { SizeServiceService } from 'src/app/service/size-service.service';
import { FinancialLogicService } from '../service/financial-logic.service';


export class Percentages {
  constructor(
    private _0: number,
    private _5: number,
    private _10: number,
    private _15: number,
    private _20: number,
    private _25: number,
    private _30: number,
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
  ) {
  }
}

@Component({
  selector: 'app-credit-lising-calculator',
  templateUrl: './credit-lising-calculator.component.html',
  styleUrls: ['./credit-lising-calculator.component.css']
})

export class CreditLisingCalculatorComponent implements OnInit {

  minwidth: number;
  minheight: number;

  secondScreenStyle: SafeStyle;

  // sliders options

  creditLisingValue = 0;
  creditLisingOptions: Options = {
    animate: false,
    floor: 0,
    ceil: 1,
    step: 1,
    showTicks: true,
    showSelectionBar: true,
    hidePointerLabels: true,
    hideLimitLabels: true,
  };
  // credit
  firstPaymentValue = 15;
  firstPaymentOptions: Options = {
    animate: false,
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
  repaymentPeriodValue = 12;
  repaymentPeriodOptions: Options = {
    animate: false,
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

  // set Percentages
  percentagesForPFOldCredit = {
    6: new Percentages(15.55, 15.55, 13.70, 13.70, 13.50, 13.50, 13.30, 13.30, 12.99, 12.99, 12.7,
                        12.7, 11.99, 11.99, 11.00, 11.00, 11.00, 11.00, 11.00),

    12: new Percentages(15.55, 15.55, 13.70, 13.70, 13.50, 13.50, 13.30, 13.30, 12.99, 12.99, 12.7,
                        12.7, 11.99, 11.99, 11.00, 11.00, 11.00, 11.00, 11.00),

    18: new Percentages(15.55, 15.55, 15.55, 15.55, 14.50, 14.50, 14.30, 14.30, 13.99, 13.99, 13.7,
                        13.7, 13.15, 13.15, 12.20, 12.20, 12.20, 12.20, 12.20),

    24: new Percentages(15.55, 15.55, 15.55, 15.55, 14.50, 14.50, 14.30, 14.30, 13.99, 13.99, 13.7,
                        13.7, 13.15, 13.15, 12.20, 12.20, 12.20, 12.20, 12.20),

    30: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.70, 14.70, 14.50, 14.50, 14.1,
                        14.1, 13.60, 13.60, 12.70, 12.70, 12.70, 12.70, 12.70),

    36: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.70, 14.70, 14.50, 14.50, 14.1,
                        14.1, 13.60, 13.60, 12.70, 12.70, 12.70, 12.70, 12.70),

    42: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                        14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

    48: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                        14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

    54: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                        14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

    60: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.90, 14.90, 14.5,
                        14.5, 13.99, 13.99, 13.13, 13.13, 13.13, 13.13, 13.13),

    66: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                        14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),

    72: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                        14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),

    78: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                        14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),

    84: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 15.55, 14.7,
                        14.7, 14.14, 14.14, 13.50, 13.50, 13.50, 13.50, 13.50),
  };

  percentagesForPFOldLising = {
    6: new Percentages(null, null, 12.7, 12.7, 12.5, 12.5, 12.3, 12.3, 11.99, 11.99,  11.7,  11.7, 10.99,
                        10.99, 10.00, 10.00, 10.00, 10.00, 10.00),
    12: new Percentages(null, null, 12.7, 12.7, 12.5, 12.5, 12.3, 12.3, 11.99, 11.99,  11.7,  11.7, 10.99,
                        10.99, 10.00, 10.00, 10.00, 10.00, 10.00),
    18: new Percentages(null, null, 14.5, 14.5, 13.5, 13.5, 13.3, 13.3, 12.99, 12.99,  12.7,  12.7, 12.15,
                        12.15, 11.20, 11.20, 11.20, 11.20, 11.20),
    24: new Percentages(null, null, 14.5, 14.5, 13.5, 13.5, 13.3, 13.3, 12.99, 12.99,  12.7,  12.7, 12.15,
                        12.15, 11.20, 11.20, 11.20, 11.20, 11.20),
    30: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 13.7, 13.7, 13.50, 13.50,  13.1,  13.1, 12.60,
                        12.60, 11.70, 11.70, 11.70, 11.70, 11.70),
    36: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 13.7, 13.7, 13.50, 13.50,  13.1,  13.1, 12.60,
                        12.60, 11.70, 11.70, 11.70, 11.70, 11.70),
    42: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                        12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
    48: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                        12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
    54: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                        12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
    60: new Percentages(null, null, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 13.99, 13.99,  13.5,  13.5, 12.99,
                        12.99, 12.12, 12.12, 12.12, 12.12, 12.12),
  };

  price: number;

  @ViewChild('prices') prices: ElementRef;

  constructor(protected sanitizer: DomSanitizer,
              private calculatorService: CalculatorToRequestService,
              private sizeService: SizeServiceService,
              private financialService: FinancialLogicService) { }

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

  switchLisingAndCredit(value: number) {
    if (value === 0) {
      if (this.firstPaymentOptions.floor !== 0) {
        this.setFirstRepaymentOptions( {floor: 0} );
      }
      if (this.repaymentPeriodOptions.ceil !== 84) {
        this.setRepaymentPeriodOptions( {ceil: 84} );
      }
    } else {
      if (this.firstPaymentOptions.floor !== 10) {
        this.setFirstRepaymentOptions( {floor: 10} );
      }
      if (this.repaymentPeriodOptions.ceil !== 60) {
        this.setRepaymentPeriodOptions( {ceil: 60} );
      }
    }
  }

  private setFirstRepaymentOptions(options?: any) {
    const newOptions: Options = Object.assign({}, this.firstPaymentOptions);

    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        newOptions[key] = options[key];
      }
    }

    this.firstPaymentOptions = newOptions;
  }

  private setRepaymentPeriodOptions(options?: any) {
    const newOptions: Options = Object.assign({}, this.repaymentPeriodOptions);

    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        newOptions[key] = options[key];
      }
    }

    this.repaymentPeriodOptions = newOptions;
  }

  // BEGIN CALCULATION FUNCTIONS
  calculatePercentagesForOldAndPF() {
    if (this.creditLisingValue === 0) {
      return this.percentagesForPFOldCredit;
    } else {
      return this.percentagesForPFOldLising;
    }
  }

  getFirstPayment(): string {
    const result =
    `${this.financialService.calculateFirstPayment(this.price, this.firstPaymentValue)} BYN (${this.firstPaymentValue}%)`;
    this.calculatorService.firstPayment.next(result);
    return result;
  }

  getPeriod(): string {
    const result = `${this.repaymentPeriodValue} Месяцв`;
    this.calculatorService.period.next(result);
    return result;
  }

  getRate() {
    const result = this.financialService.calculateRate(this.calculatePercentagesForOldAndPF(),
                                                       this.repaymentPeriodValue,
                                                       this.firstPaymentValue);

    this.calculatorService.creditOrInstallment.next(0); // 0 is credit or lising
    this.calculatorService.price.next(this.price);
    this.calculatorService.creditOrLising.next(this.creditLisingValue);
    this.calculatorService.rate.next(result * 0.01);

    return (result * 100).toFixed(2);
  }

  getPLT(): string {
    const sum = this.price - ((this.firstPaymentValue * 0.01) * this.price);
    const result = this.financialService.PLT( (this.financialService.calculateRate(this.calculatePercentagesForOldAndPF(),
    this.repaymentPeriodValue, this.firstPaymentValue) / 12), this.repaymentPeriodValue, sum);
    if (isNaN(result)) {
      // show ERROR MESSAGE NOT POSSIBLE GET CREDIT WITH 0 PERCETAGE FIRST PAYMENT AND > 5 YEARS PERIOD REPAYMENT
      return '';
    }
    this.calculatorService.plt.next(result);
    return result.toFixed(2);
  }
}
