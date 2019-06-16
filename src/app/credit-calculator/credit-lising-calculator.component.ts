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

  // for new slider

  // creditFirstPaymentPercentageValues: string[] = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'];

  // end

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
  // lising
  // lisingFirstPaymentPercentageValue = 15;
  // lisingFirstPaymentPercentageOptions: Options = {
  //   floor: 10,
  //   ceil: 90,
  //   step: 5,
  //   showTicks: true,
  //   hideLimitLabels: true,
  //   hidePointerLabels: true,
  //   getTickColor: (value: number): string => {
  //     return 'rgba(255, 255, 255, 0)';
  //   },
  //   getLegend: (value: number): string => {
  //     if (value % 10 === 0) {
  //       return value + '%';
  //     }
  //   },
  // };
  // lisingRepaymentPeriodValue = 12;
  // lisingRepaymentPeriodOptions: Options = {
  //   floor: 6,
  //   ceil: 60,
  //   step: 6,
  //   showTicks: true,
  //   hideLimitLabels: true,
  //   hidePointerLabels: true,
  //   getTickColor: (value: number): string => {
  //     return 'rgba(255, 255, 255, 0)';
  //   },
  //   getLegend: (value: number): string => {
  //     if (value % 12 === 0) {
  //       return value + ' мес';
  //     }
  //   },
  // };
  // end sliders options

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

  /*
  for other advantages for your individual credit/lising

  getOtherBrandRate(): number {
    return 0.1549;
  }


  getExtraPayment() {
    const sum = this.price - ((this.firstPaymentPercentageValue * 0.01) * this.price);
    const result = this.PLT( (this.getRate() / 12), this.repaymentPeriodValue, sum);
    const compareResult = this.PLT( (this.getOtherBrandRate() / 12), this.repaymentPeriodValue, sum);
    const finalResult = (result - compareResult) * this.repaymentPeriodValue;
    return finalResult + ' BYN';
  }
  */
  // THE END CALCULATIONS FUNCTIONS




































  // begin of the logic associated with the choice of persons and new or not new

  // selectedFace = 'F';
  // selectedNew = 'notNew';

  // code for this function

  // calculateRate(): number {
  //   let array;
  //   if (this.selectedNew === 'new' && this.selectedFace === 'F') {
  //     array = this.getPersentagesForNewAndFL();
  //   } else if (this.selectedNew === 'notNew' && this.selectedFace === 'F') {
  //     array = this.getPercentagesForOldAndPF();
  //   }
  // }

  // getPersentagesForNewAndFL() {
  //   if (this.creditLisingValue === 0) {
  //     return this.percentagesForUFNewCredit;
  //   } else {
  //     return this.percentagesForUFNewLising;
  //   }
  // }

  // end of the logic associated with the choice of persons and new or not new

  // begin function and datas for new cars

  // allMarks: Mark[] = [
  //   new Mark('Geely', null, [
  //     new Model('Atlas', null, './../assets/images/Geely Atlas.png', [
  //       new Comp('Base', 35200),
  //       new Comp('Comfort', 39700),
  //       new Comp('Luxury', 45100),
  //       new Comp('Luxury (LED)', 49600),
  //     ]),
  //     new Model('Emgrand X7', null, './../assets/images/Geely Emgrand X7.png', [
  //       new Comp('Base', 31000),
  //       new Comp('Standart', 31800),
  //       new Comp('Comfort', 35000),
  //       new Comp('Luxury', 35500),
  //       new Comp('Flagship', 38500),
  //     ]),
  //     new Model('Emgrand 7', null, './../assets/images/Geely Emgrand 7.png', [
  //       new Comp('Standart', 24900),
  //       new Comp('Comfort', 25900),
  //       new Comp('Luxury', 29200),
  //     ])
  //   ]),
  //   new Mark('Skoda', null, [
  //     new Model('Rapid', null, './../assets/images/Skoda Rapid.png', [
  //       new Comp('Active', 26710),
  //       new Comp('Ambition', 30152),
  //       new Comp('Style', 32282),
  //     ]),
  //     new Model('Octavia', null, './../assets/images/Skoda Octavia.png', [
  //       new Comp('Active', 38181),
  //       new Comp('Ambition', 43097),
  //       new Comp('Style', 47522),
  //     ]),
  //     new Model('SuperB', null, './../assets/images/Skoda SuperB.png', [
  //       new Comp('Active', 56306),
  //       new Comp('Ambition', 57136),
  //       new Comp('Style', 64604),
  //       new Comp('Laurin & Klement', 90683),
  //     ]),

  //     new Model('Kodiaq', null, './../assets/images/Skoda Kodiaq.png', [
  //       new Comp('Active', 49161),
  //       new Comp('Ambition', 59484),
  //       new Comp('Style', 67514),
  //     ]),
  //   ]),
  // ];

  // // service functions
  // findModel(name: string) {
  //   let result = 0;
  //   this.models.forEach( (model: Model, i: number) => {
  //     if (model.name === name) {
  //       result = i;
  //     }
  //   });
  //   return result;
  // }
  // findMark(name: string) {
  //   let result = 0;
  //   this.allMarks.forEach( (mark: Mark, i: number) => {
  //     if (mark.name === name) {
  //       result = i;
  //     }
  //   });
  //   return result;
  // }
  // findComp(name: string) {
  //   let result = 0;
  //   this.comps.forEach( (comp: Comp, i: number) => {
  //     if (comp.name === name) {
  //       result = i;
  //     }
  //   });
  //   return result;
  // }

  // selectedMark = 'Geely';
  // models: Model[] = this.allMarks[ (this.findMark(this.selectedMark)) ].models;
  // selectedModel: string = this.allMarks[ (this.findMark(this.selectedMark)) ].models[0].name;
  // link = this.allMarks[ (this.findMark(this.selectedMark)) ].models[0].photo;
  // comps: Comp[] =  this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps;
  // selectedComp: string = this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps[0].name;

  // price = this.allMarks[ (this.findMark(this.selectedMark)) ]
  //   .models[this.findModel(this.selectedModel)]
  //   .comps[ this.findComp(this.selectedComp) ]
  //   .price;

  // isClosedMarksOptions = true;
  // isClosedModelsOptions = true;
  // isClosedCompsOptions = true;



  // percentagesForUFNewCredit = {
  //   1: new Percentages(10.5, 9.5, 9.0, 7.0, 5.5, 3.0, 0.01, 0.01),
  //   2: new Percentages(13.5, 12.5, 11.9, 10.99, 9.99, 8.5, 5.99, 2.5),
  //   3: new Percentages(14.5, 13.5, 13.2, 12.5, 11.5, 10.5, 8.5, 5.5),
  //   5: new Percentages(14.99, 14.5, 14.2, 13.7, 13.0, 11.99, 10.7, 8.5),
  //   7: new Percentages(0, 14.99, 14.6, 14.2, 13.7, 12.9, 11.8, 9.7),
  //   10: new Percentages(0, 14.99, 14.6, 14.2, 13.7, 12.9, 11.8, 9.7)
  // };

  // percentagesForUFNewLising = {
  //   1: new Percentages(null, 5.9, 1.9, 0.01, 0.01, 0.01, 0.01, 0.01),
  //   2: new Percentages(null, 8.9, 2.9, 1.9, 0.01, 0.01, 0.01, 0.01),
  //   3: new Percentages(null, 9.9, 3.9, 2.9, 1.9, 0.01, 0.01, 0.01),
  //   4: new Percentages(null, 10.5, 4.9, 3.9, 2.9, 1.9, 0.01, 0.01),
  //   5: new Percentages(null, 10.9, 5.9, 4.9, 3.9, 2.9, 1.9, 0.01),
  // };

  // // end block which need to delete


  // calculateMinPricesForMarks() {
  //   this.allMarks.map( (mark: Mark) => {
  //     mark.models.map( (model: Model) => {
  //       const compPrices: number[] = [];
  //       model.comps.forEach((value: Comp, ) => {
  //         compPrices.push(value.price);
  //       });
  //       model.minPrice = Math.min(...compPrices);
  //     });
  //     const modelPrices: number[] = [];
  //     mark.models.forEach((value: Model, ) => {
  //       modelPrices.push(value.minPrice);
  //     });
  //     mark.minPrice = Math.min(...modelPrices);
  //   });
  //   console.log(this.allMarks);
  // }


  // // begin Slider Functions

  // closeMarksOptions() {
  //   this.isClosedMarksOptions = true;
  //   this.models = this.allMarks[ (this.findMark(this.selectedMark)) ].models;
  //   this.selectedModel = this.models[0].name;
  //   this.comps =  this.models[this.findModel(this.selectedModel)].comps;
  //   this.selectedComp = this.comps[0].name;
  //   this.link = this.models[this.findModel(this.selectedModel)].photo;
  //   this.price = this.comps[ this.findComp(this.selectedComp) ].price;
  // }
  // openMarksOptions(event: boolean) {
  //   if (event) { this.isClosedMarksOptions = false; }
  // }
  // closeModelsOptions() {
  //   this.isClosedModelsOptions = true;
  //   this.link = this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].photo;
  //   this.comps =  this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps;
  //   this.selectedComp = this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps[0].name;
  //   this.price = this.comps[ this.findComp(this.selectedComp) ].price;
  // }
  // openModelsOptions(event: boolean) {
  //   if (event) { this.isClosedModelsOptions = false; }
  // }
  // closeCompsOptions() {
  //   this.isClosedCompsOptions = true;
  //   this.price = this.comps[ this.findComp(this.selectedComp) ].price;
  // }
  // openCompsOptions(event: boolean) {
  //   if (event) { this.isClosedCompsOptions = false; }
  // }
}














// classes for new cars

// export class Mark {
//   constructor(public name: string, public minPrice: number, public models: Model[]) { }
// }
// export class Model {
//   constructor(public name: string, public minPrice: number, public photo: string, public comps: Comp[]) { }
// }
// export class Comp {
//   constructor(public name: string, public price: number) { }
// }
