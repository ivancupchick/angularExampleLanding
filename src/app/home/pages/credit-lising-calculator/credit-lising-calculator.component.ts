import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Options } from 'ng5-slider';
import { CalculatorToRequestService } from '../../services/calculator-to-request.service';
import { SizeServiceService } from 'src/app/service/size-service.service';


export class Percentages {
  public 0: number;
  public 10: number;
  public 20: number;
  public 30: number;
  public 40: number;
  public 50: number;
  public 60: number;
  public 70: number;
  constructor(one: number, two: number, three: number, four: number, five: number, six: number, seven: number, eight: number) {
    this[0] = one;
    this[10] = two;
    this[20] = three;
    this[30] = four;
    this[40] = five;
    this[50] = six;
    this[60] = seven;
    this[70] = eight;
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
    floor: 0,
    ceil: 1,
    step: 1,
    showTicks: true,
    showSelectionBar: true,
    hidePointerLabels: true,
    hideLimitLabels: true,
  };
  // credit
  creditFirstPaymentPercentageValue = 15;
  creditFirstPaymentPercentageOptions: Options = {
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
  // lising
  lisingFirstPaymentPercentageValue = 15;
  lisingFirstPaymentPercentageOptions: Options = {
    floor: 10,
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
  percentagesForPFOldCredit = {
    1: new Percentages(15.55, 13.7, 13.5, 13.3, 12.99, 12.7, 11.99, 11.00),
    2: new Percentages(15.55, 15.55, 14.5, 14.3, 13.99, 13.7, 13.15, 12.20),
    3: new Percentages(15.55, 15.55, 15.55, 14.7, 14.5, 14.1, 13.6, 12.70),
    5: new Percentages(15.55, 15.55, 15.55, 15.55, 14.9, 14.5, 13.99, 13.13),
    7: new Percentages(15.55, 15.55, 15.55, 15.55, 15.55, 14.7, 14.14, 13.5),
  };

  percentagesForPFOldLising = {
    1: new Percentages(null, 12.7, 12.5, 12.3, 11.99, 11.7, 10.99, 10.00),
    2: new Percentages(null, 14.5, 13.5, 13.3, 12.99, 12.7, 12.15, 11.2),
    3: new Percentages(null, 14.5, 14.5, 13.7, 13.5, 13.1, 12.6, 11.7),
    4: new Percentages(null, 14.5, 14.5, 14.5, 13.99, 13.5, 12.99, 12.12),
    5: new Percentages(null, 14.5, 14.5, 14.5, 13.99, 13.5, 12.99, 12.12),
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
  getFirstPaymentPercentageValue(): number {
    if (this.creditLisingValue === 0) {
      return this.creditFirstPaymentPercentageValue;
    } else {
      return this.lisingFirstPaymentPercentageValue;
    }
  }
  calculateFirstPayment(): number {
    return +(this.price * (0.01 * this.getFirstPaymentPercentageValue())).toFixed(2);
  }
  calculatePeriod(): number {
    if (this.creditLisingValue === 0) {
      return this.creditRepaymentPeriodValue;
    } else {
      return this.lisingRepaymentPeriodValue;
    }
  }
  getFirstPayment(): string {
    let firstPaymentValue: number;
    if (this.creditLisingValue === 0) {
      firstPaymentValue = this.creditFirstPaymentPercentageValue;
    } else {
      firstPaymentValue = this.lisingFirstPaymentPercentageValue;
    }
    this.calculatorService.firstPayment.next(`${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`);
    //this.getFirstPaymentValue.emit(`${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`)
    return `${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`;
  }
  getPeriod(): string {
    this.calculatorService.period.next(`${this.calculatePeriod()} Месяцв`);
    return this.calculatePeriod() + ' Месяца';
  }

  getPercentagesForOldAndPF() {
    if (this.creditLisingValue === 0) {
      return this.percentagesForPFOldCredit;
    } else {
      return this.percentagesForPFOldLising;
    }
  }
  calculateRate(): number {
    const array = this.getPercentagesForOldAndPF();

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
      if (this.getFirstPaymentPercentageValue() < +key && this.getFirstPaymentPercentageValue() >= +temporaryPecentagePaymentKey) {
        selectedPercentagePayment = percentagesArray[temporaryPecentagePaymentKey];
      }
      if (this.getFirstPaymentPercentageValue() >= 70) {
        selectedPercentagePayment = percentagesArray[70];
      }
      if (this.getFirstPaymentPercentageValue() == 0) {
        selectedPercentagePayment = percentagesArray[0];
      }
      temporaryPecentagePaymentKey = key;
    }

    this.calculatorService.price.next(this.price);
    this.calculatorService.creditOrLising.next(this.creditLisingValue);
    this.calculatorService.rate.next(selectedPercentagePayment * 0.01);

    return selectedPercentagePayment * 0.01;
  }

  getPLT(): number {
    const sum = this.price - ((this.getFirstPaymentPercentageValue() * 0.01) * this.price);
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
